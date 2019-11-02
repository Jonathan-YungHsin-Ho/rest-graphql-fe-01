import React from 'react';

export default function PokemonCard({ pokemon }) {
  // console.log(pokemon);
  return (
    <div className='pokemon-card'>
      <h3>{pokemon.name}</h3>
      <p>
        Url: <a href={pokemon.url}>{pokemon.url}</a>
      </p>
    </div>
  );
}
