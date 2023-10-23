import './Movies.css'
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";

function Movies() {

  return (
    <section className='movies' aria-label='movies'>
      <SearchForm />
      <MoviesCardList />
      <button type="button" className="movies__button">Ещё</button>
    </section>
  )
}

export default Movies;
