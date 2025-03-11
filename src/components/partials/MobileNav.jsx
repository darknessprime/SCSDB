import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MobileNav = () => {
    const location = useLocation();
    
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <nav className="mobile-menu">
            <Link to="/" className={`mobile-menu-item ${isActive('/') ? 'active' : ''}`}>
                <i className="ri-home-5-fill mobile-menu-icon"></i>
                <span>Home</span>
            </Link>
            <Link to="/trending" className={`mobile-menu-item ${isActive('/trending') ? 'active' : ''}`}>
                <i className="ri-fire-fill mobile-menu-icon"></i>
                <span>Trending</span>
            </Link>
            <Link to="/movie" className={`mobile-menu-item ${isActive('/movie') ? 'active' : ''}`}>
                <i className="ri-movie-2-fill mobile-menu-icon"></i>
                <span>Movies</span>
            </Link>
            <Link to="/tv" className={`mobile-menu-item ${isActive('/tv') ? 'active' : ''}`}>
                <i className="ri-tv-2-fill mobile-menu-icon"></i>
                <span>TV</span>
            </Link>
            <Link to="/person" className={`mobile-menu-item ${isActive('/person') ? 'active' : ''}`}>
                <i className="ri-team-fill mobile-menu-icon"></i>
                <span>People</span>
            </Link>
        </nav>
    );
};

export default MobileNav;
