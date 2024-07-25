// hooks from react
import { useEffect, useState } from "react";

//components
import { Info } from "../components/Info"
import { Loader } from "../components/Loader";
import { Popular } from "../components/Popular"
import NavbarResponsive from "../components/NavbarResponsive";

export interface Movie {
    adult: string,
    backdrop_path: string,
    genre_ids: number[],
    id: number
    original_language: string,
    original_title: string,
    overview:
    string,
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
    const bgUrl = content.length > 0 ? `url(https://image.tmdb.org/t/p/original/${content[3].backdrop_path})` : ``;
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            const timer = setTimeout(() => setIsLoading(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    return (
        <div className="flex flex-col h-screen w-full bg-black">
            {isLoading ? (
                <Loader />
            ) : (
                <div className=" flex-1 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: bgUrl }}>
                    <div className="bg-[url('./Bg-left.png')] bg-cover">
                        <NavbarResponsive setIsLoading={setIsLoading} />
                        {content.length > 0 && <Info movie={content[3]} />}
                        {content.length > 0 && <Popular movies={content} />}
                    </div>
                </div>
            )}
        </div>
    );
}