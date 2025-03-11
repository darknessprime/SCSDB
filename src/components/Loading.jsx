import React from "react";

const Loading = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center bg-primary">
            <div className="relative w-24 h-24">
                <div className="absolute inset-0 border-4 border-t-secondary border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
                <div className="absolute inset-0 border-4 border-t-transparent border-r-transparent border-b-secondary border-l-transparent rounded-full animate-spin" style={{animationDuration: '1.5s'}}></div>
            </div>
            <p className="mt-6 text-xl font-medium text-zinc-400">Loading content...</p>
        </div>
    );
};

export default Loading;
