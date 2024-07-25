// Code to fetch data from the API
import axios, { Method } from 'axios';

const url_api = "https://api.themoviedb.org/3/"

interface AxiosDataOptions {
  endpoint: string;
  method: Method;
  data?: any;
  signal?: AbortSignal;

}

async function axiosData({ endpoint, method }: AxiosDataOptions) {
  const options = {
    method: method,
    url: `${url_api}/${endpoint}`,
    params: { language: 'pt-BR', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxM2UxMGY0ODA1M2UxYzQ3ZWVlMjIzMGU3MDI4MTljNyIsIm5iZiI6MTcyMTc0NzA1Mi4wMjQ0MTcsInN1YiI6IjY0NWFlMDU2MWI3MGFlMDE2NmJlNDZiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.kcdhpd-VTUlij6G7SGUn3cJDkaihK4COOV0EJB_VGMc'
    }
  };
  try {
    const response = await axios.request(options);
    return response.data;
  }
  catch (error) {
    console.error(error);
  }

}


export async function getPopularMovies(signal?: AbortSignal) {
  return axiosData({ endpoint: "movie/popular", method: "GET", signal: signal });
}

export async function getPopularTvSeries(signal?: AbortSignal) {
  return axiosData({ endpoint: "tv/popular", method: "GET", signal: signal });
}

export async function getTopRatedMovies(signal?: AbortSignal) {
  return axiosData({ endpoint: "movie/top_rated", method: "GET", signal: signal })
}


export async function getUpcomingMovies(signal?: AbortSignal) {
  return axiosData({ endpoint: "movie/upcoming", method: "GET", signal: signal })
}

