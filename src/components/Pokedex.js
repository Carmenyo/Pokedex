import React from "react";
import "../styles/layout/_pokedex.scss";

const Pokedex = (props) => {
  const { pokemons, loading } = props;
  return (
    <div className='pokedex'>
      <div className='pokedex__header'>
        <h1>Pokedex</h1>
        <div>Página</div>
      </div>
      {loading ? (
        <div> Preparando los Pokemon de Carlitos </div>
      ) : (
        <div className='pokedex-grind'>
          {pokemons.map((pokemon, index) => {
            return (<div>
                
            </div>)
          })}
        </div>
      )}
    </div>
  );
};
export default Pokedex;
