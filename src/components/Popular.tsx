import { Loader } from "./Loader"

export function Popular({ movies, isLoading }: any) {

    const url = "https://image.tmdb.org/t/p/original/"
    const popularMovies = movies.slice(2, 10)

    return (
        <div className="pl-10 py-12 flex flex-col ">
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <h1 className="w-full pb-1 text-slate-50 font-bold">Popular on Netflix</h1>
                    <div className="flex overflow-x-auto scrollbar-hide">
                        {popularMovies &&
                            popularMovies.map((movie: any) => (
                                <img className="min-w-[240px] pr-1 rounded-md " key={movie.id} src={`${url}${movie.backdrop_path}`} />
                            ))
                        }
                    </div>
                </div>
            )}
        </div>
    )
}