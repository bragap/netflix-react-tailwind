// hooks from react
import { useEffect, useState, useCallback } from "react";

//components
import { Info } from "../components/Info";
import { Loader } from "../components/Loader";
import { Popular } from "../components/Popular";
import NavbarResponsive from "../components/NavbarResponsive";

export interface Movie {
    adult: string,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    name: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

interface HomeProps {
    content: Movie[];
}

export function Home({ content }: HomeProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [movieInPainel, setMovieInPainel] = useState(0);

    useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => setIsLoading(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    const bgUrl = content.length > 0 ? `url(https://image.tmdb.org/t/p/original/${content[movieInPainel].backdrop_path})` : ``;

    const handleMovieChange = useCallback((index: number) => {
        setMovieInPainel(index);
    }, []);

    return (
        <div className="flex flex-col h-screen w-full bg-black">
            {isLoading ? (
                <Loader />
            ) : (
                <div className="flex-1 bg-no-repeat bg-cover bg-center transition-opacity duration-100" style={{ backgroundImage: bgUrl }}>
                    <div className="bg-[url('./images/BgLeft.png')] bg-cover">
                        <NavbarResponsive setIsLoading={setIsLoading} setMovieInPainel={handleMovieChange}  />
                        {content.length > 0 && <Info movie={content[movieInPainel]} />}
                        {content.length > 0 && <Popular movies={content} setMovieInPainel={handleMovieChange} />}
                    </div>
                </div>
            )}
        </div>
    );
}
