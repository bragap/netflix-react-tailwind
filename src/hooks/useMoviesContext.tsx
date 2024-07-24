import { MoviesContext } from "../contexts/MoviesContext";
import { useContext } from "react";

export function useMoviesContext() {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error("useMoviesContext must be used within a MoviesProvider");
  }
  return context;
}