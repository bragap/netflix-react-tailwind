import { Link } from "react-router-dom";

export function Info({ movie }: any) {

    const conteudo = movie.title ? movie.title : movie.name;
    const descricao = movie ? movie.overview.substring(0, 200) + "..." : "Sem descrição";
    const tipo = movie.title ? "F I L M E S" : "S É R I E S";

    return (
                <div className="flex flex-col items-center text-start pt-36 space-y-2 w-[620px] text-slate-100 m-auto md:items-start md:justify-start md:text-center md:px-10 md:pt-20 md:pb-6 md:m-0 md:space-y-3.5" >
                    <div className=" flex gap-3 items-center">
                        <img src="./N.png" alt="" className="h-8" />
                        <p className="md:font-semibold">{tipo}</p>
                    </div>
                    <div className="sm:text-3l text-4xl text-wrap text-center md:text-6xl md:text-left">
                        {conteudo}
                    </div>
                    <div className="flex gap-1 items-center font-bold">
                        <img src="./Top10.png" alt="" className="h-4 md:h-5" />
                        <p className="text-sm  md:text-lg">#1 in TV Shows Today</p>
                    </div>
                    <div className="hidden md:flex flex-wrap text-wrap text-left">
                        {descricao}
                    </div>
                    <div className="flex gap-4 items-center">
                        <Link to="https://github.com/bragap/netflix-react-tailwind" target="_blank" className="flex items-center gap-2 bg-white p-2 rounded-sm hover:bg-gray-200 transition  justify-center md:w-[110px] ">
                            <img src="./Polygon.png" className="h-5" />
                            <span className="text-black font-semibold">Assistir</span>
                        </Link>
                        <Link to="https://github.com/bragap/netflix-react-tailwind" target="_blank" className="flex items-center gap-2 bg-zinc-600 hover:bg-zinc-500 transition p-2 rounded-sm justify-center md:w-[170px]">
                            <img src="./Info.png" className="h-5" />
                            <span className="font-semibold">Informações</span>
                        </Link>
                    </div>

                </div>
          
    )
}