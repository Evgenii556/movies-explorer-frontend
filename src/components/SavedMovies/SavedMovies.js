import './SavedMovies.css'
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from '../Preloader/Preloader';
import { useEffect, useState } from 'react';
import { sortMovies, filterShortMovies } from '../../utils/searcher';


function SavedMovies({ savedMovies, deleteMovie, getMovies, isLoading }) {

  const [isChek, setIsChek] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [movie, setMovie] = useState(savedMovies)
  const [resultMovies, setResultMovies] = useState([])

  useEffect(() => {
    if (savedMovies.length === 0) {
      getMovies();
    }
    setIsChek(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setMovie(savedMovies);
    setResultMovies(savedMovies);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedMovies])

  useEffect(() => {
    /* setNotFound(movie.length === 0 ? true : false); */
  }, [movie])

  function toggleChek() {
    setIsChek(!isChek)
    if (isChek) {
      setMovie(resultMovies)
    } else if (!isChek) {
      setMovie(filterShortMovies(resultMovies))

    }
  }

  function search(key) {
    const res = sortMovies(savedMovies, key)
    setResultMovies(res)
    if (!isChek) {
      setMovie(res)
      setNotFound(res.length === 0 ? true : false);
    } else if (isChek) {
      setMovie(filterShortMovies(res))
      setNotFound(filterShortMovies(res).length === 0 ? true : false);

    }
    setNotFound(movie.length === 0 ? true : false);
  }


  return (
    <section className='saved-movies' aria-label='movies'>
      <SearchForm
        isChek={isChek}
        toggleChek={toggleChek}
        sortMovies={search}
      />
      {isLoading && <Preloader />}
      {notFound && <p className="saved-movies__error">Ничего не найдено</p>}
      {!isLoading && <MoviesCardList
        movies={movie}
        savedMovies={savedMovies}
        deleteMovie={deleteMovie}
      />}
    </section>
  )
}

export default SavedMovies
