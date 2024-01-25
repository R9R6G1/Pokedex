import React from "react";
import { capitalizeFirstLetter } from "../utils/helpers";

const PokemonDetails = ({ selectedPokemon }) => {
  const formatPokemonId = (id) =>
    id < 10 ? `00${id}` : id < 100 ? `0${id}` : `${id}`;
  const formatType = (type) => capitalizeFirstLetter(type);

  return (
    <div className="pokemon-details">
      <img
        src={selectedPokemon.sprites.front_default}
        className="pokemon-img"
        alt={selectedPokemon.name}
      />
      <p className="pokemon-name" id={`pokemon-${selectedPokemon.id}`}>
        {capitalizeFirstLetter(selectedPokemon.name)} #
        {formatPokemonId(selectedPokemon.id)}
      </p>
      <table className="pokemon-stats">
        <thead>
          <tr className="pokemon-type">
            <th>Type</th>
            <th>Attack</th>
            <th>Defense</th>
            <th>HP</th>
            <th>Sp. Attack</th>
            <th>Sp. Defense</th>
            <th>Speed</th>
            <th>Weight</th>
            <th>Total Moves</th>
          </tr>
        </thead>
        <tbody>
          <tr className="pokemon-info">
            <td>{formatType(selectedPokemon.types[0].type.name)}</td>
            <td>{selectedPokemon.stats[1].base_stat}</td>
            <td>{selectedPokemon.stats[2].base_stat}</td>
            <td>{selectedPokemon.stats[0].base_stat}</td>
            <td>{selectedPokemon.stats[3].base_stat}</td>
            <td>{selectedPokemon.stats[4].base_stat}</td>
            <td>{selectedPokemon.stats[5].base_stat}</td>
            <td>{selectedPokemon.weight}</td>
            <td>{selectedPokemon.moves.length}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PokemonDetails;
