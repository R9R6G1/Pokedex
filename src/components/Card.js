import React from "react";
import { capitalizeFirstLetter, getTypeColor } from "../utils/helpers";

const Card = ({ pokemon, onCardClick }) => {
  const backgroundColor = getTypeColor(pokemon.types[0].type.name);

  return (
    <div className="pokemon-card" onClick={() => onCardClick(pokemon)}>
      <img
        src={pokemon.sprites.front_default}
        className="pokemon-img"
        alt={pokemon.name}
      />
      <p className="pokemon-name">{capitalizeFirstLetter(pokemon.name)}</p>
      <p className="pokemon-types" style={{ backgroundColor }}>
        {capitalizeFirstLetter(pokemon.types[0].type.name)}
      </p>
    </div>
  );
};

export default Card;
