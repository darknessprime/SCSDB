import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

const HorizontalCards = ({ data, title }) => {
    return (
        <div className="w-full flex gap-5 overflow-x-auto pb-8 pt-4 px-2 hide-scrollbar">
            {data.length > 0 ? (
                data.map((d, i) => (
                    <Link
                        to={`/${d.media_type || title}/details/${d.id}`}
                        key={i}
                        className="card min-w-[280px] h-auto flex-shrink-0 animate-fade-in"
                        style={{
                            animationDelay: `${i * 0.05}s`,
                        }}
                    >
                        <div className="relative">
                            <img
                                className="w-full h-[160px] object-cover"
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
                                <span className="rating-badge absolute bottom-2 right-2 w-9 h-9 text-sm">
                                    {(d.vote_average * 10).toFixed()}<sup>%</sup>
                                </span>
                            )}
                        </div>
                        <div className="p-4">
                            <h3 className="font-semibold text-lg line-clamp-1">
                                {d.name || d.title || d.original_name || d.original_title}
                            </h3>
                            <p className="text-zinc-400 text-sm mt-2 line-clamp-2">
                                {d.overview ? `${d.overview.slice(0, 80)}...` : "No overview available"}
                            </p>
                        </div>
                    </Link>
                ))
            ) : (
                <div className="w-full text-center py-10">
                    <h2 className="text-2xl font-bold text-zinc-500">No content available</h2>
                </div>
            )}
        </div>
    );
};

export default HorizontalCards;
