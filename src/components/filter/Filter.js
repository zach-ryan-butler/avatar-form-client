export const filterByAffiliation = (characters, nations) => {
  const filteredCharacters = characters.filter(character => {
    return character.affiliation
  }).map(characters => ({
    name: characters.name,
    url: characters.url,
    affiliation: characters.affiliation.toLowerCase()
  }))

  return filteredCharacters.filter(({ affiliation }) => {
    return nations.some(el => {
      return affiliation.match(new RegExp(el, "i"))
    })
  })
}

export const filterByName = (initialName, characters) => {
  const name = [];
  name.push(initialName);
  
  const filteredCharacters = characters.map(character => ({
    name: character.name.replace(/'/g, ""),
    url: character.url,
    affiliation: character.affiliation
  }))

  return filteredCharacters.filter(character => {
    return name.some(el => {
      return character.name.toLowerCase().match(new RegExp(el, "i"))
    })
  })
}