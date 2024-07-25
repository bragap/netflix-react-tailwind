// hooks
import { useEffect, useState } from "react";

//pages
import { Movie } from "../pages/Home";

interface PopularProps {
    movies: Movie[];
    setMovieInPainel: (index: number) => void;
}

export function Popular({ movies, setMovieInPainel }: PopularProps) {
    const popularMovies = movies.slice(0, 10);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const renderMovie = (movie: Movie, index: number) => (
        <div key={movie.id} className="relative group min-w-[240px] pr-1">
            {width > 768 ? (
                <img
                    className="link-two rounded-md"
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={movie.title || movie.name}
                />
            ) : (
                <img
                    className="link-two rounded-md"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt={movie.title || movie.name}
                />
            )}
            <button className="absolute inset-0 cursor-pointer bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-md" onClick={() => setMovieInPainel(index)}>
                <div className="text-white text-center">
                    <h3 className="text-lg font-bold">{movie.title || movie.name}</h3>
                </div>
            </button>
        </div>
    );

    return (
        <div className="pl-10 py-12 flex flex-col ">
            <h1 className="w-full pb-1 text-slate-50 font-bold">Popular na Netflix</h1>
            <div className="flex overflow-x-auto scrollbar-hide">
                {popularMovies.map(renderMovie)}
            </div>
        </div>
    );
}
