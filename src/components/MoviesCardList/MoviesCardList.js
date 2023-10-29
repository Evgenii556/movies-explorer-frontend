import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import { BEATFILM_URL } from '../../utils/constants';
import { useEffect, useState } from 'react';
import useWidth from '../useWidth/useWidth';
import { SIZE_M, SIZE_S, RENDER_L, RENDER_M, RENDER_S } from '../../utils/constants';
import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies, savedMovies, addMovie, deleteMovie }) {
  const isMovie = useLocation().pathname === '/movies'
  const width = useWidth(0);
  const [arr, setArr] = useState([]);
  const [isAllShown, setIsAllShown] = useState(true);
  const [renderParams, setRenderParams] = useState({});

  useEffect(() => {
    if (width <= SIZE_S) {
      setRenderParams(RENDER_S);
      setArr(movies.slice(0, renderParams.arrSize))
    }
    if (width > SIZE_S && width <= SIZE_M) {
      setArr(movies.slice(0, renderParams.arrSize))
      setRenderParams(RENDER_M);
    }
    if (width >= SIZE_M) {
      setRenderParams(RENDER_L);
      setArr(movies.slice(0, renderParams.arrSize))
    }
    if (movies.length > renderParams.arrSize) {
      setIsAllShown(false)
    } else {
      setIsAllShown(true)
    }
  }, [width, renderParams.arrSize, movies]);

  function handleAddRow() {
    if (renderParams.arrSize + renderParams.addButton >= movies.length) {
      renderParams.arrSize = movies.length
      setIsAllShown(true)
    } else {
      renderParams.arrSize += renderParams.addButton;
    }
    setArr(movies.slice(0, renderParams.arrSize))
  }

  return (
    <section className="movie" aria-label="films">
      <ul className="movie__list">
        {(isMovie ? arr : movies).map((movie) => (<MoviesCard
          key={movie.id || movie._id}
          image={movie._id ? movie.image : `${BEATFILM_URL}${movie.image.url}`}
          movie={movie}
          savedFilms={movie}
          addMovie={addMovie}
          savedMovies={savedMovies || []}
          deleteMovie={deleteMovie}
        />))}
      </ul>
      {!isAllShown && isMovie && arr.length > 0 &&
        <button type="button"
          className="movies__button"
          onClick={handleAddRow}
        >Ещё
        </button>}
    </section>
  );
}

export default MoviesCardList;
