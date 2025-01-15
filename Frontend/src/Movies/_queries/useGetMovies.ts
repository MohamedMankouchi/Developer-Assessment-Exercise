import { useQuery } from "@tanstack/react-query";
import { movieKeys } from "../movieKeys";
import { MovieProps } from "../Movies.types";

const getMovies = async (): Promise<MovieProps[]> => {
  const res = await fetch("http://localhost:3000/movies");
  const data = await res.json();
  if (data.message) throw Error(data.message);
  return data;
};

export const useGetMovies = () => {
  return useQuery({
    queryKey: movieKeys.all,
    queryFn: getMovies,
    staleTime: 6000000,
  });
};
