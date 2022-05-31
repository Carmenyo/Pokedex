import React, {useEffect, useState} from "react";
import "../styles/App.scss";
import Navbar from "./Navbar";
import Pokedex from "./Pokedex";
import Searchbar from "./Searchbar";

function App() {

  const {loading, setLoading} = useState(false);
  const {pokemons, setPokemons} = useState({});
  const fetchPokemons = async () => {
    try {
    setLoading (true)
    const data = await getPokemons()
    setPokemons (result);
    setLoading (false);
  }
    catch (error) {
      console.log ("fetchPokemons error: ", error )
}
  }
  useEffect(() => {
    console.log("carregou")
    fetchPokemons():
  }, [] )


  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons = {pokemons} loading = {loading} />
    </div>
  );
}
export default App;
