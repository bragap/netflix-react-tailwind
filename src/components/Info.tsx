import { Link } from "react-router-dom";

export function Info({movie}:any) {

    const conteudo = movie.title ? movie.title : movie.name;
    const descricao = movie ? movie.overview.substring(0,200)+"..." : "Sem descrição";
    const tipo = movie.title ? "F I L M E S" : "S É R I E S";

    return (
        <div className="flex flex-col  px-10 py-10 text-slate-100 space-y-3.5 w-[620px]">
            <div className="flex gap-3 items-center">
                <img src="./N.png" alt="" className="h-8" />
                <p className="font-semibold">{tipo}</p>
            </div>
            <div className="text-6xl">
                {conteudo}
                
            </div>
            <div className="flex gap-1 items-center font-bold">
                <img src="./Top10.png" alt="" className="h-5" />
                <p className="text-lg">#1 in TV Shows Today</p>
            </div>
            <div className="flex flex-wrap text-wrap">
                {descricao}
                
            </div>
            <div className="flex gap-4 items-center">
                <Link to="https://github.com/bragap/netflix-react-tailwind" target="_blank" className="flex items-center gap-2 bg-white p-2 rounded-sm justify-center w-[110px]">
                    <img src="./Polygon.png" className="h-5" />
                    <span className="text-black font-semibold">Play</span>
                </Link>
                <Link to="https://github.com/bragap/netflix-react-tailwind" target="_blank" className="flex items-center gap-2 bg-zinc-700 p-2 rounded-sm justify-center w-[170px]">
                    <img src="./Info.png" className="h-5" />
                    <span className="font-semibold">More info</span>
                </Link>
            </div>
        </div>
    )
}