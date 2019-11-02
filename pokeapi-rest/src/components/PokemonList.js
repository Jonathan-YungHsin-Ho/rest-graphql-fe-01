import React, { useState, useEffect } from 'react';
import axios from 'axios';

import PokemonCard from './PokemonCard';

export default function PokemonList() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then(res => {
        // console.log(res.data.results);
        setPokemons(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Pokemon List</h2>
      <div className='pokemon-list'>
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
