import './MoviesCardList.css'
import MoviesCard from '../MoviesCard/MoviesCard'
import {list} from '../../utils/list'
function MoviesCardList() {

  return (
    <section className="movie" aria-label="films">
      <ul className="movie__list">
        {list.map((movie) => (<MoviesCard
          movie={movie}
        />))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
