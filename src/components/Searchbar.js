import React, {useState} from "react";
import "../styles/layout/_searchBar.scss"

const Searchbar = (props) => {
    const [search, setSearch] = useState("dito")
    const {onSearch} = props
    const onChangeHandler = (e) => {
        setSearch(e.target.value)
        if(e.target.value.length === 0) {
            onSearch(undefined)
        }
    }

    const onButtonClickHandler = () => {
        onSearch(search)
    }

    return (
        <div className="searchBar">
            
                <input className= "searchBar__input" placeholder="Busca un Pokemon" onChange={onChangeHandler} />
                <button className="searchBar__button"onClick={onButtonClickHandler} >Buscar</button>
        </div>
    )
}

export default Searchbar;