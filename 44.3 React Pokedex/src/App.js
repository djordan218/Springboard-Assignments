import React from 'react';
import Pokedex from './Pokedex';
import pokemon from './pokemon';
import './App.css';

function App() {
  return (
    <div className="body">
      <Pokedex pokemon={pokemon} />
    </div>
  );
}

export default App;
