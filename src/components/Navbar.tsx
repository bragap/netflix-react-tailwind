import { NavLink } from "react-router-dom";

export function Navbar({ setIsLoading }: any) {

  return (
    <div className="flex justify-between text-slate-200 items-center px-10 py-3 h-16 text-sm bg-[url('./Background-gradient.svg')] ">
      <div className="flex w-full gap-9 items-center">
        <NavLink to="/" className="link-two" onClick={() => setIsLoading(true)}>
          <img src="./Vector.png" alt="Netflix Logo" />
        </NavLink>
        <div >
          <ul className="flex gap-7">
            <NavLink to="/" onClick={() => setIsLoading(true)} className={({ isActive }) => { return isActive ? "link font-bold" : "link" }}>Home</NavLink>
            <NavLink to="/series" onClick={() => setIsLoading(true)} className={({ isActive }) => { return isActive ? "link font-bold" : "link" }}>TV Series</NavLink>
            <NavLink to="/upcoming" onClick={() => setIsLoading(true)} className={({ isActive }) => { return isActive ? "link font-bold" : "link" }}>Upcoming Movies</NavLink>
            <NavLink to="/top-movies" onClick={() => setIsLoading(true)} className={({ isActive }) => { return isActive ? "link font-bold" : "link" }}>Top Rated Movies</NavLink>
          </ul>
        </div>
      </div>
      <div className="flex items-center gap-3 text-sm">
        <NavLink to="/" className="link-two">
          <img src="./Search.png" alt="" />
        </NavLink>
        <NavLink to="/" className="link-two">
             Kids</NavLink>
        <NavLink to="/">
          <img src="./Bell.png" alt="" className="link-two"/>
        </NavLink>
        <NavLink to="/">
          <img src="./Avatar.png" alt="" className="link-two" />
        </NavLink>
        <NavLink to="/">
          <img src="./Arrow.png" alt="" className="link-two"/>
        </NavLink>
      </div>
    </div>
  )
}