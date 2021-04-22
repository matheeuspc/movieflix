import { getAccessTokenDecoded, isAuthenticated, logout } from 'core/utils/auth';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './styles.scss';

const Navbar = () => {
    const [currentUser, setCurrentUser] = useState('');
    const location = useLocation();

    useEffect(() => {
        const currentUserData = getAccessTokenDecoded();
        setCurrentUser(currentUserData.user_name);
    }, [location]);
    
    const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        logout();
    }

    return (
        <nav className="bg-primary main-navbar">
            <Link to="/movies" className="nav-logo-text">MovieFlix</Link>
            {
                isAuthenticated() && currentUser && (
                    <a
                        href="#logout"
                        className="logout-btn"
                        onClick={(event) => {
                            handleLogout(event);
                        }}
                    >
                        sair
                    </a>
                )
            }
        </nav>

    );
}

export default Navbar;