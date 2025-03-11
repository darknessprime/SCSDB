import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

const Cards = ({ data, title }) => {
    return (
        <div className="flex flex-wrap w-full h-full px-3 md:px-[5%] py-6 bg-primary gap-3 md:gap-6 content-container">
            <Link
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }}
                className="fixed bottom-[5rem] md:bottom-[5%] right-[5%] flex justify-center items-center w-10 h-10 md:w-12 md:h-12 bg-secondary hover:bg-secondary-dark text-white rounded-full shadow-button transition-all duration-300 z-40"
                aria-label="Scroll to top"
            >
                <i className="text-white ri-arrow-up-line text-xl"></i>
            </Link>
            
            {data.map((c, i) => (
                <Link
                    to={`/${c.media_type || title}/details/${c.id}`}
                    className="card w-[calc(50%-0.75rem)] sm:w-[calc(33.33%-1rem)] md:w-[calc(25%-1.5rem)] mb-6 animate-fade-in"
                    key={i}
                    style={{
                        animationDelay: `${i * 0.05}s`,
                    }}
                >
                    <div className="relative overflow-hidden">
                        <img
                            className="w-full h-[180px] sm:h-[240px] md:h-[300px] lg:h-[380px] object-cover transition-transform duration-700 hover:scale-110"
                            src={
                                c.poster_path || c.backdrop_path || c.profile_path
                                    ? `https://image.tmdb.org/t/p/original/${
                                          c.poster_path ||
                                          c.backdrop_path ||
                                          c.profile_path
                                      }`
                                    : noimage
                            }
                            alt={c.name || c.title || "Movie poster"}
                            loading="lazy"
                        />
                        {c.vote_average && (
                            <div className="rating-badge absolute right-2 bottom-2 md:right-3 md:bottom-3 w-8 h-8 md:w-12 md:h-12 text-sm md:text-lg font-bold">
                                {(c.vote_average * 10).toFixed()}<sup>%</sup>
                            </div>
                        )}
                    </div>
                    <div className="p-3 md:p-4">
                        <h2 className="movie-title text-base md:text-xl text-light line-clamp-1">
                            {c.name ||
                                c.title ||
                                c.original_name ||
                                c.original_title}
                        </h2>
                        {c.release_date && (
                            <p className="text-zinc-400 text-xs md:text-sm">
                                {new Date(c.release_date).getFullYear()}
                            </p>
                        )}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Cards;
