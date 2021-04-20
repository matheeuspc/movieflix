import { isAuthenticated, logout } from 'core/utils/auth';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const handleLogout = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    logout();
}

const Navbar = () => {

    return (
        <nav className="bg-primary main-navbar">
            <Link to="/movies" className="nav-logo-text">MovieFlix</Link>
            {
                isAuthenticated() && (
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