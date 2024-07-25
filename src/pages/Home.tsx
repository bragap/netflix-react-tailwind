import { useState } from "react";
import { Info } from "../components/Info"
import { Loader } from "../components/Loader";
import { Popular } from "../components/Popular"
import NavbarResponsive from "../components/NavbarResponsive";

export function Home({ content }: any) {
    const bgUrl = content.length > 0 ? `url(https://image.tmdb.org/t/p/original/${content[3].backdrop_path})` : ``;
    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className="flex flex-col h-screen w-full bg-black">
            {isLoading ? (
                setTimeout(() => setIsLoading(false), 1000) &&
                <Loader />
            ) : (
                <div className=" flex-1 bg-no-repeat bg-cover bg-center" style={{ backgroundImage: bgUrl }}>
                    <div className="bg-[url('./Bg-left.png')] bg-cover">
                    <NavbarResponsive setIsLoading={setIsLoading}/>
                    {content.length > 0 && <Info isLoading={isLoading} movie={content[3]} />}
                    {content.length > 0 && <Popular isLoading={isLoading} movies={content} />}
                    </div>
                </div>
            )}
        </div>
    );
}