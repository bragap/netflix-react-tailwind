import "./index.css"
import { useMoviesContext } from "./hooks/useMoviesContext"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"


function App() {

  const { popularMovies, popularTvSeries,topRatedMovies, topRatedSeries, upcomingMovies, images } = useMoviesContext();
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home content={popularMovies} images={images} />} />
            <Route path="/series" element={<Home content={popularTvSeries} />} />
            <Route path="/top-movies" element={<Home content={topRatedMovies} />} />
            <Route path="/top-series" element={<Home content={topRatedSeries} />} />
            <Route path="/upcoming" element={<Home content={upcomingMovies} />} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
