import React, { useRef } from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

const HorizontalCards = ({ data, title }) => {
    const scrollContainerRef = useRef(null);
    
    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };
    
    return (
        <div className="w-full relative">
            {/* Desktop scroll controls - hidden on mobile */}
            <button 
                onClick={() => handleScroll('left')} 
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-dark/80 hover:bg-secondary text-white w-10 h-10 rounded-full items-center justify-center shadow-lg transition-colors"
                aria-label="Scroll left"
            >
                <i className="ri-arrow-left-s-line text-xl"></i>
            </button>
            
            <button 
                onClick={() => handleScroll('right')} 
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-dark/80 hover:bg-secondary text-white w-10 h-10 rounded-full items-center justify-center shadow-lg transition-colors"
                aria-label="Scroll right"
            >
                <i className="ri-arrow-right-s-line text-xl"></i>
            </button>
            
            {/* Scroll container */}
            <div 
                ref={scrollContainerRef}
                className="w-full flex gap-3 md:gap-5 overflow-x-auto pb-6 md:pb-8 pt-2 md:pt-4 px-2 md:px-12 hide-scrollbar"
                style={{ scrollBehavior: 'smooth' }}
            >
                {data && data.length > 0 ? (
                    data.map((d, i) => (
                        <Link
                            to={`/${d.media_type || title}/details/${d.id}`}
                            key={i}
                            className="card min-w-[220px] sm:min-w-[250px] md:min-w-[280px] h-auto flex-shrink-0 animate-fade-in"
                            style={{
                                animationDelay: `${i * 0.05}s`,
                            }}
                        >
                            <div className="relative">
                                <img
                                    className="w-full h-[120px] sm:h-[140px] md:h-[160px] object-cover"
                                    src={
                                        d.backdrop_path || d.poster_path
                                            ? `https://image.tmdb.org/t/p/original${
                                                d.backdrop_path || d.poster_path
                                            }`
                                            : noimage
                                    }
                                    alt={d.title || d.name || "Media image"}
                                    loading="lazy"
                                />
                                {d.vote_average && (
                                    <span className="rating-badge absolute bottom-2 right-2 w-7 h-7 md:w-9 md:h-9 text-xs md:text-sm">
                                        {(d.vote_average * 10).toFixed()}<sup>%</sup>
                                    </span>
                                )}
                            </div>
                            <div className="p-3 md:p-4">
                                <h3 className="font-semibold text-base md:text-lg line-clamp-1">
                                    {d.name || d.title || d.original_name || d.original_title}
                                </h3>
                                <p className="text-zinc-400 text-xs md:text-sm mt-1 md:mt-2 line-clamp-2">
                                    {d.overview ? `${d.overview.slice(0, 80)}...` : "No overview available"}
                                </p>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="w-full text-center py-10">
                        <h2 className="text-xl md:text-2xl font-bold text-zinc-500">No content available</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HorizontalCards;
