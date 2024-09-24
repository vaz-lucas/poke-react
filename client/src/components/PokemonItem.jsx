import React from 'react'
import useFetch from '../hooks/useFetch'
import { useState, useEffect } from 'react'



export default function PokemonItem({ pokeObj, isFavorite, setFavorites }) { //vai receber um pokeObj e um isFavorite do pai dele (aquele que chama)
    const { name, url } = pokeObj /// Eu pego o name e url que estão contidas no objeto pokemon
    const { data } = useFetch(url)




    const handleFavorite = () => {
        if (!isFavorite) {
            console.log([name], "is Favorite")
            setFavorites(prev => { // prev (poderia ser qualquer nome) representa o valor anterior e me permite utilizar sem ter que chamar todos os favorites para dentro do filho
                return [...prev, pokeObj]
            })
            // console.log(favorites)
        } else {
            console.log([name], "is NOT Favorite")
            setFavorites(prev => {
                return prev.filter(item => {
                    return item.name !== pokeObj.name
                })
            })
        }
    }

    return (
        <div className="pokemon-preview"   >
            <div className={isFavorite ? 'favoritePokemons' : ""} id={data.id}>
                <h2>{name}</h2>
                <img src={data?.sprites?.front_default} alt="" />
                <button onClick={handleFavorite}>Favorite</button>

            </div>
        </div>

    )
}
