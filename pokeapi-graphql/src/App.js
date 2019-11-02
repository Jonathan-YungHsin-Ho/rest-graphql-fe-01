import React from 'react';
import './App.css';

import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className='App'>
      <h1>Pokemon React App - GraphQL API</h1>
      <PokemonList />
    </div>
  );
}

export default App;
