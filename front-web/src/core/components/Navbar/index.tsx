import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => {
    return (
        <nav className="bg-primary main-navbar">
            <Link to="/movies" className="nav-logo-text">MovieFlix</Link>
        </nav>
    );
}

export default Navbar;