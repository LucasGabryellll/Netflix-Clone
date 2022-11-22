import { API_KEY } from "./Tmdb";
import { basicFetch } from "./Tmdb";

export const getMovieInfo = async (movieId: number, type: string) => {
  let info = []

  if (movieId) {
    switch(type) {
      case 'movie':
        info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);
      break;

      case 'tv':
        info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
      break;

      default: 
        info = [];
        break
    }
  }

  return info;
}