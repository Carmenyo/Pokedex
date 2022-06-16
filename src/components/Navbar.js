
import logo from "../images/pokeapi_logo.png";
import "../styles/layout/_navBar.scss";
import foto from "../images/carlitos.png";


const Navbar = () => {
 
  return (
    <nav className='navBar'>
      <div className='navBar__title'>
        <img alt='pokeApi-logo' src={logo} className='navBar__image' />
        <p className='navBar__autor'>de Carlitos</p>
      </div>


      <img alt='pokeApi-logo' src={foto} className='navBar__photo' />
    </nav>
  );
};
export default Navbar;
