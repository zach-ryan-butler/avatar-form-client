import React from 'react';
import AvatarCardList from './avatarCardList/AvatarCardList';

function App() {
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
    },
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


  return (
    <AvatarCardList characters={characters} />
  );
}

export default App;
