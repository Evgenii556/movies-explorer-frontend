import './Movies.css'
import { useEffect, useState } from 'react';
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from '../Preloader/Preloader';
import { filterShortMovies, sortMovies } from '../../utils/searcher';

function Movies({ beatMovies, savedMovies, setMovies, addMovie, deleteMovie, getBeatMovies, isLoading }) {

  const checkPosition = localStorage.getItem('checkbox');
  /*  const [firstSearch, setFirstSearch] = useState(true); */
  const [isChek, setIsChek] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [showedMovies, setShowedMovies] = useState([])

  useEffect(() => {
    //Прошлый поиск
    if (checkPosition !== null) {
      setIsChek(checkPosition === 'true');
      if (checkPosition === 'true') {
        const localShortMovieStore = JSON.parse(localStorage.getItem('short-movies'));
        if (localShortMovieStore.length < 1) {
          setNotFound(true)
        } else {
          setShowedMovies(localShortMovieStore);
        }
      } else if (checkPosition === 'false') {
        const localMovieStore = JSON.parse(localStorage.getItem('movies'));
        if (localMovieStore.length < 1) {
          setNotFound(true)
        } else {
          setShowedMovies(localMovieStore);
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function toggleChek() {
    setIsChek(!isChek)
    if (!isChek) {
      const localShortMovieStore = JSON.parse(localStorage.getItem('short-movies'));
      setNotFound(localShortMovieStore.length === 0 ? true : false);
      setShowedMovies(JSON.parse(localStorage.getItem('short-movies')));

    } else if (isChek) {
      const localMovieStore = JSON.parse(localStorage.getItem('movies'));
      setNotFound(localMovieStore.length === 0 ? true : false);
      setShowedMovies(JSON.parse(localStorage.getItem('movies')));
    }
  }

  function search(key) {
    localStorage.setItem("checkbox", isChek);
    localStorage.setItem("key", key);
    if (beatMovies.length === 0) {
      getBeatMovies()
        .then((res) => {
          return sortMovies(res, key);
        })
        .then((res) => {
          if (isChek) {
            const localShortMovieStore = filterShortMovies(res);
            setNotFound(localShortMovieStore.length === 0 ? true : false);
            setShowedMovies(localShortMovieStore);
          } else {
            setNotFound(res.length === 0 ? true : false);
            setShowedMovies(res);
          }
          localStorage.setItem("movies", JSON.stringify(res));
          localStorage.setItem("short-movies", JSON.stringify(filterShortMovies(res)));
        })
    } else {
      const sortResult = sortMovies(beatMovies, key);
      if (isChek) {
        const shortMovieStore = filterShortMovies(sortResult);
        setNotFound(shortMovieStore.length === 0 ? true : false);
        setShowedMovies(shortMovieStore)
      } else {
        setShowedMovies(sortResult)
        setNotFound(sortResult.length === 0 ? true : false);
      }
      localStorage.setItem("movies", JSON.stringify(sortResult));
      localStorage.setItem("short-movies", JSON.stringify(filterShortMovies(sortResult)));
    }
  }

  return (
    <section className='movies' aria-label='movies'>
      <SearchForm
        isChek={isChek}
        getBeatMovies={getBeatMovies}
        sortMovies={search}
        toggleChek={toggleChek}
      />
      {isLoading && <Preloader />}
      {!isLoading && <MoviesCardList
        movies={showedMovies}
        savedMovies={savedMovies}
        addMovie={addMovie}
        deleteMovie={deleteMovie}
      />}
      {notFound && <p className="movies__notfound">Ничего не найдено</p>}
    </section>
  )
}

export default Movies;
