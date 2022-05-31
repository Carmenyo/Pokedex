import React, {useState} from "react";
import "../styles/layout/_searchBar.scss"

const Searchbar = () => {
    const {search, setSearch} = useState ("dito");
    const onChangeHandler = (e) => {
        console.log ("pokemon:", e.target.value)
        setSearch= e.target.value
    }

    const onButtonClickHandler = () => {
        console.log ("pokemon:", search)
    } 
  return (
    <>
      <div className='searchBar'>
        <input className="searchBar__input" placeholder='Busca a uno de los pokemon de Carlos' onChange={onChangeHandler} />
        {search}

      <button className="searchBar__button"onClick={onButtonClickHandler}>Buscar</button></div>
    </>
  );
};

export default Searchbar;
