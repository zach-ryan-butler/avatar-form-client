export const getCharacters = () => {
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=497?page=1', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if(!res.ok) throw 'Could not get characters';
    return res.json();
  })
  .then(json => (
      json.map(character => ({
        name: character.name,
        url: character.photoUrl,
        affiliation: character.affiliation
      }))
    ))
}

export const getCharacterByName = name => {
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?name=${name}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => {
    if(!res.ok) throw 'Could not get character';
    return res.json();
  })
}