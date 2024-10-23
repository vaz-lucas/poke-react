import { Link } from 'react-router-dom'
import '../css/navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Pokémon</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/favorites">Favorites</Link>
            </div>
        </nav>
    );
}

export default Navbar;