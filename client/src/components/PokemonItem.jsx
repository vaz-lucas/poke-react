import React from 'react'
import useFetch from '../hooks/useFetch'
import { useState, useEffect } from 'react'



export default function PokemonItem({ pokeObj, isFavorite, setFavorites }) { //vai receber um pokeObj e um isFavorite do pai dele (aquele que chama)
    const { name, pokemon_v2_pokemonsprites, id } = pokeObj /// Eu pego o name e url que estão contidas no objeto pokemon
    /*     const { data } = useFetch(url) */




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

        /*   <div className="pokemon-preview"   > */

        <div className={isFavorite ? 'favoritePokemons favStar pokemon-preview' : "pokemon-preview"} id={id}>
            <div className="display-pokemon">
                <h2>{name}</h2>
                {/*                 <img className='star' src="../images/star-empty.png" alt="" /> */}
                <button className={`star2 ${isFavorite ? 'favoritePokemons' : ''}`} onClick={handleFavorite}><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg></button>


            </div>
            <img src={pokemon_v2_pokemonsprites?.[0]?.sprites?.front_default} alt="" />
            {/*                 <button onClick={handleFavorite}>Favorite</button> */}

        </div>

        /*         </div> */

    )
}
