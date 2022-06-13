const PokemonDetail = () => {
    const {favoritePokemons, updateFavoritePokemons} = useContext(FavoriteContext)
    const {pokemon} = props;
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    }
    const heart = favoritePokemons.includes(pokemon.name) ? "❤️" : "🖤";
    return (
    <div className="pokemonCard">
        <div className="pokemonCard__imageContainer">
            <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemonCard__imageContainer-image"/>
        </div>
        <div className="pokemonCard__body">
            <div className="pokemonCard__body-top">
                <h3 > {pokemon.name}</h3>
                <div>#{pokemon.id}</div>
            </div>
            <div className="card-bottom">
                <div className="pokemon-type">
                    {pokemon.types.map((type, index) => {
                        return (
                            <div key={index} className="pokemon-type-text">{type.type.name}</div>
                        )
                    })}
                </div>
                <button className="pokemon-heart-button" onClick={onHeartClick}>
                    {heart}
                </button>
            </div>
        </div>
    </div>)
}

export default Pokemon;