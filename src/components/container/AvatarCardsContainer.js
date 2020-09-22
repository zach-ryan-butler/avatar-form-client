import React, { useEffect, useState } from 'react';
import { getCharacters, getCharacterByName } from '../../services/avatarApi';
import AvatarCardList from '../avatarCardList/AvatarCardList';
import Header from '../header/Header';
import NameSearch from '../nameSearch/NameSearch';
import { filterByAffiliation, filterByName } from '../filter/Filter';

// const initialValues = {
//   name: '',
//   nations: ['air']
// }

export default function AvatarCardsContainer() {

  const characters = [
    {
      name: 'Ashuna',
      url: 'https://vignette.wikia.nocookie.net/avatar/images/9/9a/Ashuna.png/revision/latest?cb=20161026183558'
    },
    {
      name: 'Azula',
      url: 'https://vignette.wikia.nocookie.net/avatar/images/1/12/Azula.png/revision/latest?cb=20140905084941'
    },
    {
      name: 'Aang',
      url: 'https://vignette.wikia.nocookie.net/avatar/images/a/ae/Aang_at_Jasmine_Dragon.png/revision/latest?cb=20130612174003'
    }
  ]
  
  // const [characters, setCharacters] = useState([])
  // const [values, setValues] = useState(initialValues);

  // useEffect(() => {
  //   getCharacters()
  //     .then(res => setCharacters(res))
  // }, [])

  // useEffect(() => {
  //   if(values.name.length > 0) {
  //     const filteredName = filterByName(values.name, characters)
  //     setCharacters(filteredName);
  //   } else {
  //     getCharacters()
  //       .then(res => setCharacters(res))
  //   }
  // }, [values.name])

  // const handleInputChange = ({ target }) => {
  //   const { name, value } = target;
  //   setValues({
  //     ...values,
  //     [name]: value
  //   })
  // }

  return (
    <>
      <Header />
      <AvatarCardList characters={characters} />
    </>
  )
}