import React, { useContext } from "react";
import "../styles/layout/_pokedex.scss";
import Pagination from"./Pagination";
import Pokemon from"./Pokemon";
import pokeball from "../images/pokeball.jpg";
import FavoriteContext from "../contexts/favoritesContext";


const Pokedex = (props) => {
    const { pokemons, loading, page, setPage, totalPages } = props;
    const onLeftClickHandler = () => {
        if(page > 0) {
            setPage(page-1)
        }
    }
    const onRightClickHandler = () => {
        if(page+1 !== totalPages){
            setPage(page+1)
        }
    }
    const { favoritePokemons } = useContext(FavoriteContext);
    return (
      <div className="pokedex">
        <div className="pokedex__pagination" >
          <h1 className="pokedex__title">Pokedex</h1>
          
      <div>
        <img alt='pokeBall' src={pokeball} className='navBar__pokeball' />
        <p className='navBar__favorites'>{favoritePokemons.length}</p>
      </div>
          <Pagination
              page={page+1}
              totalPages={totalPages}
              onLeftClick={onLeftClickHandler}
              onRightClick={onRightClickHandler}
          />
        </div>
        {loading ? (
          <div className="pokedex__loading">Cargando los pokemon de Carlos</div>
        ) : (
          <div className="pokedex__grid">
            {pokemons && pokemons.map((pokemon, index) => {
              return (
                <Pokemon key={index}  pokemon={pokemon}/>
              );
            })}
          </div>
        )}
      </div>
    );
  };
  
  export default Pokedex;
