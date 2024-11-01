
import { useState, useEffect } from 'react'
import './css/home.css'
import PokemonItem from './components/PokemonItem';
import useGraphQL from './hooks/useGraphQL';
import usePokemon from './hooks/usePokemon';

const Home = ({ setFavorites, favorites }) => {
    const [offSet, setoffSet] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchType, setSearchType] = useState('');

    /*  const { data } = useGraphQL(`
         query samplePokeAPIquery {
   pokemon_v2_pokemon(offset: ${offSet}, limit: 10) {
     id
     name
     pokemon_v2_pokemonsprites {
       id
       sprites
     }
   }
 }`) */

    const { data, fetchPokemonSearch } = usePokemon()

    useEffect(() => {
        fetchPokemonSearch(offSet, searchTerm, searchType)
    }, [offSet])






    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                fetchPokemonSearch(offSet, searchTerm, searchType)
            }}>
                <input type="text" placeholder='Name' value={searchTerm} onChange={(e) => {
                    const target = e.target
                    const value = target.value
                    setSearchTerm(value)
                }} />
                <select onChange={(e) => {
                    const target = e.target
                    const value = target.value
                    setSearchType(value)
                }}>
                    <option value="">All</option>
                    <option value="normal">Normal</option>
                    <option value="fire">Fire</option>
                    <option value="water">Water</option>
                    <option value="grass">Grass</option>
                    <option value="eletric">Eletric</option>
                    <option value="ice">Ice</option>
                    <option value="fighting">Fighting</option>
                    <option value="poison">Poison</option>
                    <option value="ground">Ground</option>
                    <option value="flying">Flying</option>
                    <option value="psychic">Psychic</option>
                    <option value="bug">Bug</option>
                    <option value="rock">Rock</option>
                    <option value="ghost">Ghost</option>
                    <option value="dragon">Dragon</option>
                    <option value="dark">Dark</option>
                    <option value="steel">Steel</option>
                    <option value="fairy">Fairy</option>

                </select>

                <button type='submit'>Go!</button> </form>





            <div className="home-front">


                {data?.data?.pokemon_v2_pokemon?.map((pokemon) => {
                    return (
                        <PokemonItem key={`pokemon-item-${pokemon.name}`} pokeObj={pokemon}
                            isFavorite={favorites.some(item => {
                                return item.name === pokemon.name // pegando todos os pokemons e verificando se algum deles está nos favoritos
                            })}
                            setFavorites={setFavorites} // passei para o filho a capacidade de alterar o estado
                        ></PokemonItem>  // a key é necessária para que o objeto iterado mantenha sempre a mesma ordem

                    )
                })}


            </div>
            <div className="offsetButtons">
                <button disabled={offSet === 0} onClick={() => setoffSet(offSet - 20)}>Previous</button>
                <button onClick={() => setoffSet(offSet + 20)} >Next  </button>
            </div>
        </div>
    );

}

export default Home;