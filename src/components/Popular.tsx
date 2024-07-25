// hooks
import { useEffect, useState } from "react";

//pages
import { Movie } from "../pages/Home";

interface PopularProps {
    movies: Movie[];
}
export function Popular({ movies }: PopularProps) {

    const popularMovies = movies.slice(3, 10)

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


    return (
        <div className="pl-10 py-12 flex flex-col ">
            <h1 className="w-full pb-1 text-slate-50 font-bold">Popular na Netflix</h1>
            {width &&
                width > 768 ? (
                <div className="flex overflow-x-auto scrollbar-hide">
                    {popularMovies &&
                        popularMovies[0].title ? (
                        popularMovies.map((movie: Movie) => (
                            <div key={movie.id} className="relative group min-w-[240px] pr-1">
                                <img
                                    className="link-two rounded-md"
                                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                    alt={movie.title}
                                />
                                <div className="absolute inset-0 cursor-pointer bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-white text-center">
                                        <h3 className="text-lg font-bold">{movie.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        popularMovies.map((movie: Movie) => (
                            <div key={movie.id} className="relative group min-w-[240px] pr-1">
                                <img
                                    className="link-two rounded-md"
                                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                    alt={movie.name}
                                />
                                <div className="absolute inset-0 cursor-pointer bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-white text-center">
                                        <h3 className="text-lg font-bold">{movie.name}</h3>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}


                </div>
            ) : (
                <div className="flex overflow-x-auto scrollbar-hide">
                    {popularMovies &&
                        popularMovies[0].title ? (
                        popularMovies.map((movie: any) => (
                            <div key={movie.id} className="relative group min-w-[240px] pr-1">
                                <img
                                    className="link-two rounded-md"
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    alt={movie.title}
                                />
                                <div className="absolute inset-0 cursor-pointer bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-white text-center">
                                        <h3 className="text-lg font-bold">{movie.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        popularMovies.map((movie: any) => (
                            <div key={movie.id} className="relative group min-w-[240px] pr-1">
                                <img
                                    className="link-two rounded-md"
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    alt={movie.name}
                                />
                                <div className="absolute inset-0 cursor-pointer bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-white text-center">
                                        <h3 className="text-lg font-bold">{movie.name}</h3>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )
            }
        </div>
    )
}