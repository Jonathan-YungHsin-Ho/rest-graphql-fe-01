import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import PokemonCard from './PokemonCard';

const POKEMON = gql`
  query Pokemon {
    pokemons(first: 20) {
      id
      name
      number
      classification
      image
    }
  }
`;

export default function PokemonList() {
  const { loading, error, data } = useQuery(POKEMON);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <h2>Pokemon List</h2>
      <div className='pokemon-list'>
        {data.pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
