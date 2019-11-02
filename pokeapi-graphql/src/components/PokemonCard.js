import React from 'react';

export default function PokemonCard({ pokemon }) {
  // console.log(pokemon);
  return (
    <div className='pokemon-card'>
      <h3>{pokemon.name}</h3>
      <img src={pokemon.image} alt='pokemon' />
      <p>{pokemon.classification}</p>
    </div>
  );
}
