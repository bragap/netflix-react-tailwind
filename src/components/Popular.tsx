import { useEffect, useState } from "react";

export function Popular({ movies }: any) {

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
                        popularMovies.map((movie: any) => (
                            <img className="link-two min-w-[240px] pr-1 rounded-md " key={movie.id} src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path})`} />
                        ))
                    }
                </div>
            ) : (
                <div className="flex overflow-x-auto scrollbar-hide">
                    {popularMovies &&
                        popularMovies.map((movie: any) => (
                            <img className="link-two min-w-[240px] pr-1 rounded-md " key={movie.id} src={`https://image.tmdb.org/t/p/original/${movie.poster_path})`} />
                        ))
                    }
                </div>
            )
            }
        </div>
    )
}