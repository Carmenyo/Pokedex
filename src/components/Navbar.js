import React from "react";
import logo from "../images/pokeapi_logo.png"
import "../styles/layout/_navBar.scss"

const Navbar = () => {
  return (
    <nav className="navBar">
      <img
      alt="pokeApi-logo"
      src={logo}
      className= "navBar__image"
      />
      <p className="navBar__autor">de Carlos Rodero</p>
    </nav>
  );
};
export default Navbar;
