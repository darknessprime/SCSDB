import axios from "../../utils/axios";
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

const Topnav = () => {
    const [query, setquery] = useState("");
    const [searches, setsearches] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef(null);

    const GetSerches = async () => {
        try {
            if (query.trim() === "") {
                setsearches([]);
                return;
            }
            
            const { data } = await axios.get(`/search/multi?query=${query}`);
            setsearches(data.results);
            setShowResults(true);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    // Handle clicks outside search results to close dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowResults(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (query) GetSerches();
        }, 500);
        
        return () => clearTimeout(timeoutId);
    }, [query]);

    return (
        <div className="w-full max-w-xl relative" ref={searchRef}>
            <div className="flex items-center bg-dark rounded-full px-4 py-2 focus-within:ring-2 focus-within:ring-secondary transition-all duration-300">
                <i className="text-zinc-400 text-xl ri-search-line"></i>
                <input
                    onChange={(e) => setquery(e.target.value)}
                    value={query}
                    className="w-full text-zinc-200 mx-3 p-2 text-base outline-none border-none bg-transparent"
                    type="text"
                    placeholder="Search movies, TV shows, and people..."
                    onFocus={() => query && setShowResults(true)}
                />
                {query.length > 0 && (
                    <button
                        onClick={() => {
                            setquery("");
                            setsearches([]);
                        }}
                        className="text-zinc-400 hover:text-white transition-colors"
                    >
                        <i className="text-xl ri-close-fill"></i>
                    </button>
                )}
            </div>

            {showResults && searches.length > 0 && (
                <div className="absolute z-50 w-full max-h-[70vh] bg-dark rounded-xl mt-2 overflow-auto shadow-xl border border-zinc-800 animate-fade-in">
                    {searches.map((s, i) => (
                        <Link
                            to={`/${s.media_type}/details/${s.id}`}
                            key={i}
                            onClick={() => {
                                setShowResults(false);
                                setquery("");
                            }}
                            className="flex items-center gap-3 p-3 hover:bg-zinc-800 transition-colors border-b border-zinc-800 last:border-b-0"
                        >
                            <img
                                className="w-12 h-16 object-cover rounded-md flex-shrink-0"
                                src={
                                    s.backdrop_path || s.profile_path
                                        ? `https://image.tmdb.org/t/p/w200/${
                                              s.backdrop_path || s.profile_path || s.poster_path
                                          }`
                                        : noimage
                                }
                                alt=""
                                loading="lazy"
                            />
                            <div className="flex flex-col">
                                <span className="font-medium text-white line-clamp-1">
                                    {s.name || s.title || s.original_name || s.original_title}
                                </span>
                                <span className="text-sm text-zinc-400">
                                    {s.media_type.charAt(0).toUpperCase() + s.media_type.slice(1)}
                                    {s.release_date && ` • ${s.release_date.split('-')[0]}`}
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Topnav;
