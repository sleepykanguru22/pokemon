import React, { useState } from "react";
const Pokemon = (props) => {
  const [pokemon, setPokemon] = useState(null);

  const getAllPokemon = (event) => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setPokemon(response.results);
      });
  };

  const showPokemon = () => {
    if (pokemon === null) {
      return;
    } else {
      return pokemon.map((pokemon, idx) => {
        return (
          <li key={idx}>
            {idx + 1}: {pokemon.name}
          </li>
        );
      });
    }
  };

  return (
    <>
      <button onClick={getAllPokemon}>Fetch Pokémon!</button>
      <ul>{showPokemon()}</ul>
    </>
  );
};

export default Pokemon;
