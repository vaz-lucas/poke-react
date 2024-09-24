
import { useState, useEffect } from 'react'
import './App.css'
import useFetch from './hooks/useFetch';
import PokemonItem from './components/PokemonItem';

const Home = ({ setFavorites, favorites }) => {
    const [offSet, setoffSet] = useState(0);

    const { data } = useFetch(`https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=20`);





    return (
        <div className="home">
            <p>{JSON.stringify(favorites.map(item => item.name))}</p>

            {data?.results?.map((pokemon) => {
                return (
                    <PokemonItem key={`pokemon-item-${pokemon.name}`} pokeObj={pokemon}
                        isFavorite={favorites.some(item => {
                            return item.name === pokemon.name // pegando todos os pokemons e verificando se algum deles está nos favoritos
                        })}
                        setFavorites={setFavorites} // passei para o filho a capacidade de alterar o estado
                    ></PokemonItem>  // a key é necessária para que o objeto iterado mantenha sempre a mesma ordem

                )
            })}
            <button disabled={offSet === 0} onClick={() => setoffSet(offSet - 20)}>Previous</button>
            <button onClick={() => setoffSet(offSet + 20)} >Next  </button>

        </div>
    );

}

export default Home;