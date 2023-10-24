import { SHORT } from "./constants";


export function filterShortMovies(movies) {
  console.log(movies);
  if (Array.isArray(movies) && movies.length < 1) return []
  const shortDurationMovies = movies.filter(movie => movie.duration <= SHORT);
  return shortDurationMovies;
}

export function sortMovies(movies, searchItem) {
  if (!searchItem) return movies
  if (Array.isArray(movies) && movies.length < 1) return []
  return movies.filter((movie) => {
    const searchString = searchItem.toLowerCase().trim();
    return String(movie.nameRU).toLowerCase().trim().includes(searchString) ||
      String(movie.nameEN).toLowerCase().trim().includes(searchString);
  });
}
