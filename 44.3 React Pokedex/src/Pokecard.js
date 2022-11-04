import React from 'react';
import './Pokecard.css';

const Pokecard = ({ id, name, type, base_experience }) => {
  const pokemonImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="Pokecard">
      <div className="Pokecard-name">{name}</div>
      <img className="Pokecard-img" alt="" src={pokemonImg} />
      <ul>
        <li>Type: {type}</li>
        <li>EXP: {base_experience}</li>
      </ul>
    </div>
  );
};

export default Pokecard;
