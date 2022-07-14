import React, { useState, useEffect } from "react";
import axios from "axios";
const Pokemon = (props) => {
  //   const [pokemon, setPokemon] = useState(null);

  //   const getAllPokemon = (event) => {
  //     fetch("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((response) => {
  //         setPokemon(response.results);
  //       });
  //   };

  //Note the second argument is an empty array.
  const [pokemon, setPokemon] = useState(null);
  const [fetch, setFetch] = useState(false);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0")
      .then((response) => {
        setPokemon(response.data.results);
      });
  }, [fetch]);

  //   const showPokemon = () => {
  //     if (pokemon === null) {
  //       return;
  //     } else {
  //       return pokemon.map((pokemon, idx) => {
  //         return (
  //           <li key={idx}>
  //             {idx + 1}: {pokemon.name}
  //           </li>
  //         );
  //       });
  //     }
  //   };

  return (
    <>
      <button onClick={(e) => setFetch(true)}>Fetch Pokémon!</button>
      <ul>
        {fetch ? (
          pokemon.map((item, i) => <li key={i}>{item.name}</li>)
        ) : (
          <li></li>
        )}
      </ul>
    </>
  );
};

export default Pokemon;
