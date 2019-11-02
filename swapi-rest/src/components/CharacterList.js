import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://swapi.co/api/people/')
      .then(res => {
        // console.log(res.data.results);
        setCharacters(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Character List</h2>
      <div className='character-list'>
        {characters.map(character => (
          <CharacterCard key={character.url} character={character} />
        ))}
      </div>
    </div>
  );
}
