
import { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import useFetch from './hooks/useFetch';
import PokemonItem from './components/PokemonItem';
import useGraphQL from './hooks/useGraphQL';

const Home = ({ setFavorites, favorites }) => {
    const [offSet, setoffSet] = useState(0);

    const { data } = useGraphQL(`
        query samplePokeAPIquery {
  pokemon_v2_pokemon(offset: ${offSet}, limit: 10) {
    id
    name
    pokemon_v2_pokemonsprites {
      id
      sprites
    }
  }
}`)





    return (
        <div>
            <div className="home-front">
                {/*             <p>{JSON.stringify(data)}</p> */}

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