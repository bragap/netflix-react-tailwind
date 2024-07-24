import { useState } from "react";
import { Info } from "../components/Info"
import { Loader } from "../components/Loader";
import { Navbar } from "../components/Navbar";
import { Popular } from "../components/Popular"

export function Home({ content }: any) {
    const bgUrl = content.length > 0 ? `url(https://image.tmdb.org/t/p/original/${content[2].backdrop_path})` : `url('./default.jpg')`;
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="flex flex-col h-screen w-full bg-black">
            {isLoading ? (
                setTimeout(() => setIsLoading(false), 1000) &&
                <Loader />
            ) : (
                <div className="fundo flex-1 bg-no-repeat bg-cover bg-center  " style={{ backgroundImage: bgUrl }}>
                    <Navbar setIsLoading={setIsLoading} />
                    {content.length > 0 && <Info movie={content[2]} />}
                    {content.length > 0 && <Popular isLoading={isLoading} movies={content} />}
                </div>
            )}
        </div>
    );
}