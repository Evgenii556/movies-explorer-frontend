import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import { BEATFILM_URL } from '../../utils/constants';
import { useEffect, useState } from 'react';
import useWidth from '../useWidth/useWidth';
import { SIZE_L, SIZE_M, SIZE_S, RENDER_L, RENDER_M, RENDER_S } from '../../utils/constants';
import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies, savedMovies, addMovie, deleteMovie }) {
  const isMovie = useLocation().pathname === '/movies'
  const width = useWidth();
  const [arr, setArr] = useState([]);
  const [isAllShown, setIsAllShown] = useState(false);
  const [renderParams, setRenderParams] = useState({});

  useEffect(() => {
    if (width <= SIZE_S) {
      setRenderParams(RENDER_S);
      setArr(movies.slice(0, renderParams.arrSize))
    }
    if (width >= SIZE_S && width <= SIZE_M) {
      setArr(movies.slice(0, renderParams.arrSize))
      setRenderParams(RENDER_M);
    }
    if (width > SIZE_L) {
      setRenderParams(RENDER_L);
      setArr(movies.slice(0, renderParams.arrSize))
    }
  }, [width, renderParams.arrSize, movies]);

  function handleAddRow() {
    if (movies.length === renderParams.arrSize) {
      setIsAllShown(true)
    }
    if (renderParams.arrSize + renderParams.addButton > movies.length) {
      renderParams.arrSize = movies.length
    } else {
      renderParams.arrSize += renderParams.addButton;
    }
    setArr(movies.slice(0, renderParams.arrSize))
  }

  return (
    <section className="movie" aria-label="films">
      <ul className="movie__list">
        {arr.map((movie) => (<MoviesCard
          key={movie.id || movie._id}
          image={movie._id ? movie.image : `${BEATFILM_URL}${movie.image.url}`}
          movie={movie}
          savedFilms={movie}
          addMovie={addMovie}
          savedMovies={savedMovies || []}
          deleteMovie={deleteMovie}
        />))}
      </ul>
      {!isAllShown && isMovie &&
          <button type="button"
            className="movies__button"
            onClick={handleAddRow}
          >Ещё
          </button>}
    </section>
  );
}

export default MoviesCardList;
