import React, { useEffect, useState } from 'react';
import { getCharacters } from '../../services/avatarApi';
import AvatarCardList from '../avatarCardList/AvatarCardList';

export default function AvatarCardsContainer() {

  const [characters, setCharacters] = useState([])
  
  useEffect(() => {
    getCharacters()
      .then(res => setCharacters(res))
  }, [])
  
  return (
    <AvatarCardList characters={characters} />
  )
}