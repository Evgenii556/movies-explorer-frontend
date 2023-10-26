import './SavedMovies.css'
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from '../Preloader/Preloader';
import { useEffect, useState } from 'react';
import { sortMovies, filterShortMovies } from '../../utils/searcher';


function SavedMovies({ savedMovies, deleteMovie, getMovies, isLoading, isBlocked }) {

  const [isChek, setIsChek] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [movie, setMovie] = useState([]);
  const [stringKey, setStringKey] = useState('');

  useEffect(() => {
    if (savedMovies.length === 0) {
      getMovies();
    }
    setIsChek(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {

    if (stringKey.length > 0) {
      const res = sortMovies(savedMovies, stringKey);
      if (isChek) {
        setMovie(res)
        setNotFound(res.length === 0 ? true : false);
      } else if (!isChek) {
        setMovie(filterShortMovies(res))
        setNotFound(filterShortMovies(res).length === 0 ? true : false);
      }
      setNotFound(movie.length === 0 ? true : false);
    } else {
      setMovie(savedMovies);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [savedMovies])

  useEffect(() => {
    setNotFound(movie.length === 0 ? true : false);
  }, [movie])

  function toggleChek() {
    setIsChek(!isChek)
    const res = sortMovies(savedMovies, stringKey)
    if (isChek) {
      setMovie(res)
      setNotFound(res.length === 0 ? true : false);
    } else if (!isChek) {
      setMovie(filterShortMovies(res))
      setNotFound(filterShortMovies(res).length === 0 ? true : false);

    }
    setNotFound(movie.length === 0 ? true : false);
  }

  function search(key) {
    setStringKey(key);
    const res = sortMovies(savedMovies, key)
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
        isBlocked={isBlocked}
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
