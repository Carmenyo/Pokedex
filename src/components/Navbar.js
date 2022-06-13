import React, { useContext } from "react";
import FavoriteContext from "../contexts/favoritesContext";
import logo from "../images/pokeapi_logo.png";
import "../styles/layout/_navBar.scss";
import foto from "../images/carlitos.png";
import pokeball from "../images/pokeball.jpg";

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);
  return (
    <nav className='navBar'>
      <div className='navBar__title'>
        <img alt='pokeApi-logo' src={logo} className='navBar__image' />
        <p className='navBar__autor'>de Carlos Rodero</p>
      </div>

      <div>
        <img alt='pokeBall' src={pokeball} className='navBar__pokeball' />
        <p className='navBar__favorites'>{favoritePokemons.length}</p>
      </div>

      <img alt='pokeApi-logo' src={foto} className='navBar__photo' />
    </nav>
  );
};
export default Navbar;
