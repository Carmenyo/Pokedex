import "../styles/layout/_searchBar.scss";
import React, { useState } from "react";
import { searchPokemon } from "../services/api";

const Searchbar = () => {
  const { search, setSearch } = useState("dito");
  const { pokemon, setPokemon } = useState();

  const onChangeHandler = (e) => {
    setSearch = e.target.value;
  };

  const onButtonClickHandler = () => {
    onSearchHandler(search);
  };

  const onSearchHandler = async (pokemon) => {
    const result = await searchPokemon(pokemon);
    setPokemon(result);
  };

  return (
    <>
      <div className='searchBar'>
        <input
          className='searchBar__input'
          placeholder='Busca a uno de los pokemon de Carlos'
          onChange={onChangeHandler}
        />
        {search}

        <button className='searchBar__button' onClick={onButtonClickHandler}>
          Buscar
        </button>
      </div>
      {pokemon ? (
      <div>
        <div>Nombre: {pokemon.name}</div>
        <div>Peso:{pokemon.weigth}</div>
        <img src={pokemon.sprites.front_default} alt="{pokemon.name}"/>
      </div>
      ): null}
    </>
  );
};

export default Searchbar;
