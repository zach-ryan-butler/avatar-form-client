import React, { useEffect, useState } from 'react';
import { getCharacters, getCharacterByAffiliation } from '../../services/avatarApi';
import AvatarCardList from '../avatarCardList/AvatarCardList';

export default function AvatarCardsContainer() {

  const [characters, setCharacters] = useState([])
  
  useEffect(() => {
    getCharacters()
      .then(res => setCharacters(res))
  }, [])

  getCharacterByAffiliation('Fire Nation')
    .then(res => console.log(res))

  return (
    <AvatarCardList characters={characters} />
  )
}