import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
    return (
        <div
            style={{
                background: `linear-gradient(180deg, rgba(22,21,26,0) 0%, rgba(22,21,26,0.8) 100%), url(https://image.tmdb.org/t/p/original/${
                    data.backdrop_path || data.profile_path
                })`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] flex flex-col justify-end items-start p-4 md:p-[5%] rounded-lg md:rounded-2xl my-3 md:my-6 mx-0 md:mx-4"
        >
            <div className="max-w-full md:max-w-2xl animate-slide-up">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2 md:mb-4 leading-tight">
                    {data.name || data.title || data.original_name || data.original_title}
                </h1>
                <p className="text-light text-sm md:text-base lg:text-lg mb-3 md:mb-6 line-clamp-2 md:line-clamp-3">
                    {data.overview}...
                    <Link
                        to={`/${data.media_type}/details/${data.id}`}
                        className="text-accent-purple ml-1 hover:underline"
                    >
                        more
                    </Link>
                </p>
                <div className="flex items-center gap-3 md:gap-6 mb-4 md:mb-8">
                    {data.release_date && (
                        <div className="flex items-center text-accent-yellow text-sm md:text-base">
                            <i className="ri-calendar-line mr-1 md:mr-2"></i>
                            <span>{new Date(data.release_date).getFullYear()}</span>
                        </div>
                    )}
                    {data.media_type && (
                        <div className="flex items-center text-accent-yellow text-sm md:text-base">
                            <i className="ri-film-line mr-1 md:mr-2"></i>
                            <span>{data.media_type.toUpperCase()}</span>
                        </div>
                    )}
                </div>
                <Link
                    to={`/${data.media_type}/details/${data.id}/trailer`}
                    className="btn btn-primary inline-flex items-center gap-2 text-sm md:text-base"
                >
                    <i className="ri-play-fill text-lg md:text-xl"></i> Watch Trailer
                </Link>
            </div>
        </div>
    );
};

export default Header;
