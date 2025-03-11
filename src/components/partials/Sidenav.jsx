import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidenav = () => {
    const location = useLocation();
    
    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <div className="w-[20%] h-full bg-dark p-6 flex flex-col">
            <Link to="/" className="flex items-center gap-2 mb-10">
                <i className="text-accent-purple text-2xl ri-tv-fill"></i>
                <span className="text-2xl font-bold text-white">SCSDB.</span>
            </Link>
            
            <nav className="flex flex-col gap-2">
                <h1 className="text-zinc-400 uppercase text-sm font-medium tracking-wider mb-3 ml-2">
                    New Feeds
                </h1>
                
                <Link
                    to="/trending"
                    className={`nav-link ${isActive('/trending') ? 'nav-link-active' : 'text-zinc-400 hover:bg-zinc-800'}`}
                >
                    <i className="ri-fire-fill"></i> Trending
                </Link>
                
                <Link
                    to="/popular"
                    className={`nav-link ${isActive('/popular') ? 'nav-link-active' : 'text-zinc-400 hover:bg-zinc-800'}`}
                >
                    <i className="ri-award-fill"></i> Popular
                </Link>
                
                <Link
                    to="/movie"
                    className={`nav-link ${isActive('/movie') ? 'nav-link-active' : 'text-zinc-400 hover:bg-zinc-800'}`}
                >
                    <i className="ri-movie-2-fill"></i> Movies
                </Link>
                
                <Link
                    to="/tv"
                    className={`nav-link ${isActive('/tv') ? 'nav-link-active' : 'text-zinc-400 hover:bg-zinc-800'}`}
                >
                    <i className="ri-tv-2-fill"></i> TV Shows
                </Link>
                
                <Link
                    to="/person"
                    className={`nav-link ${isActive('/person') ? 'nav-link-active' : 'text-zinc-400 hover:bg-zinc-800'}`}
                >
                    <i className="ri-team-fill"></i> People
                </Link>
            </nav>
            
            <div className="mt-10 pt-6 border-t border-zinc-800">
                <h1 className="text-zinc-400 uppercase text-sm font-medium tracking-wider mb-3 ml-2">
                    Information
                </h1>
                
                <Link className="nav-link text-zinc-400 hover:bg-zinc-800">
                    <i className="ri-information-fill"></i> About SCSDB
                </Link>
                
                <Link className="nav-link text-zinc-400 hover:bg-zinc-800">
                    <i className="ri-phone-fill"></i> Contact Us
                </Link>
            </div>
            
            <div className="mt-auto pt-6 text-center text-zinc-500 text-sm">
                <p>© {new Date().getFullYear()} SCSDB</p>
                <p>Powered by TMDB API</p>
            </div>
        </div>
    );
};

export default Sidenav;
