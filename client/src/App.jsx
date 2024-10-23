import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
/* import './index.css' */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import PokemonItem from './components/PokemonItem';
import Navbar from './components/Navbar';
import Home from './Home';
import Favorites from './components/Favorite';



function App() {

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    const initialValue = JSON.parse(saved || "[]");
    return initialValue || [];
  }); // lista de items que começa vazia, colchetes para ser objeto

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // useEffect(() => {
  //   const saved = localStorage.getItem('favorites');
  //   const initialValue = JSON.parse(saved);
  //   setFavorites(initialValue)
  // }, [])

  return (


    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home setFavorites={setFavorites} favorites={favorites} />
            </Route>
            <Route path="/favorites">
              <Favorites setFavorites={setFavorites} favorites={favorites} />
            </Route>

          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App
