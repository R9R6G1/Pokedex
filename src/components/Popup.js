import React from "react";
import PokemonDetails from "./PokemonDetails";

const Popup = ({ selectedPokemon, onClose }) => {
  if (!selectedPokemon) {
    return null;
  }

  return (
    <div className="popup">
      <div className="popup-content">
        <span className="popup-close" onClick={onClose}>
          &times;
        </span>
        <PokemonDetails selectedPokemon={selectedPokemon} />
      </div>
    </div>
  );
};

export default Popup;
