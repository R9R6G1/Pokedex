import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Header from "./components/Header";
import Card from "./components/Card";
import PokemonDetails from "./components/PokemonDetails";
import Popup from "./components/Popup";

function App() {
  const [data, setData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [number, setNumber] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  const fetchPokemon = async (num) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${num}`
    );
    return response.data;
  };

  const loadMore = () => {
    setNumber((prevNumber) => prevNumber + 12);
  };

  useEffect(() => {
    const fetchData = async () => {
      const promises = [];
      for (let i = number; i < number + 12; i++) {
        promises.push(fetchPokemon(i));
      }
      const result = await Promise.all(promises);
      setData((prevData) => [...prevData, ...result]);
    };

    fetchData();
  }, [number]);

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);

    if (window.innerWidth <= 473) {
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  
  return (
    <div>
      <div className="container">
        <Header />
        <div className="row">
          <div className="card">
            {data.map((pokemon) => (
              <Card
                key={pokemon.key}
                pokemon={pokemon}
                onCardClick={handleCardClick}
              />
            ))}
            <button className="loadMore" onClick={loadMore}>
              Show more
            </button>
          </div>

          {showPopup && (
            <Popup
              selectedPokemon={selectedPokemon}
              onClose={handleClosePopup}
            />
          )}

          {selectedPokemon && window.innerWidth > 473 && (
            <PokemonDetails selectedPokemon={selectedPokemon} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
