import { useEffect, useState } from "react";
import PokemonItem from "./PokemonItem";




const Favorites = ({ favorites, setFavorites }) => {



    return (


        <div>
            <p>{JSON.stringify(favorites)}</p>

            {favorites.map(item => {

                return <PokemonItem key={`pokemon-item-favorite-${item.name}`} pokeObj={item} isFavorite={true} setFavorites={setFavorites} />
            })}


        </div>
        // localStorage.setFavorites('favorites', JSON.stringify(Favorites));
    );
}

export default Favorites;