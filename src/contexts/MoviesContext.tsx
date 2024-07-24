import { createContext, useEffect, useState } from 'react'
import { getPopularMovies, getPopularTvSeries, getTopRatedMovies, getUpcomingMovies } from '../lib/api';

export const MoviesContext = createContext<any>(null);

export function MoviesProvider({ children }: any) {

  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTvSeries, setPopularTvSeries] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);



  useEffect(() => {
    getPopularMovies()
      .then((data) => {
        setPopularMovies(data?.results || []);

      })

    getPopularTvSeries()
      .then((data) => {
        setPopularTvSeries(data?.results || []);

      })

    getTopRatedMovies()
      .then((data) => {
        setTopRatedMovies(data?.results || []);

      })


    getUpcomingMovies()
      .then((data) => {
        setUpcomingMovies(data?.results || []);

      })



  }, [])

  return (
    <MoviesContext.Provider value={{
      popularMovies, popularTvSeries, topRatedMovies, upcomingMovies
    }}>
      {children}
    </MoviesContext.Provider>
  )
}