import React from 'react';
import './App.css';

import CharacterList from './components/CharacterList';

function App() {
  return (
    <div className='App'>
      <h1>SWAPI React App - REST API</h1>
      <CharacterList />
    </div>
  );
}

export default App;
