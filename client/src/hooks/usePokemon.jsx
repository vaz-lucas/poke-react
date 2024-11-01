import { useEffect, useState } from "react";

const usePokemon = () => {
    const [data, setData] = useState('');

    /*     async function fetchAllPokemon(offSet) {
            const res = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "query": `
                 query samplePokeAPIquery {
            pokemon_v2_pokemon(offset: ${offSet}, limit: 10) {
                 id
                  name
                 pokemon_v2_pokemonsprites {
                   id
               sprites
                        }
                      }
                    }`,
                    "variables": null,
                })
            })
            const data = await res.json()
            return data
        } */
    async function fetchPokemonSearch(offSet, searchTerm, searchType) {
        const res = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "query": `
             query samplePokeAPIquery {
        pokemon_v2_pokemon(offset: ${offSet}, limit: 12, where: {name: {_regex: "${searchTerm.toLowerCase()}"}, _and: {pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_regex: "${searchType}"}}}}} ) {
             id
              name
             pokemon_v2_pokemonsprites {
               id
           sprites
                    }
                  }
                }`,
                "variables": null,
            })
        })
        const data = await res.json()
        setData(data)
    }

    /*     async function fetchPokemonType(offSet, type) {
            const res = await fetch('https://beta.pokeapi.co/graphql/v1beta', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    "query": `
                 query samplePokeAPIquery {
            pokemon_v2_pokemon(offset: ${offSet}, limit: 12, where: {pokemon_v2_pokemontypes: {pokemon_v2_type: {name: {_regex: "${type}"}}}} ) {
                 id
                  name
                 pokemon_v2_pokemonsprites {
                   id
               sprites
                        }
                      }
                    }`,
                    "variables": null,
                })
            })
            const data = await res.json()
            setData(data)
        } */



    return { data, fetchPokemonSearch }
}

export default usePokemon;