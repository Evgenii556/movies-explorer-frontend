import './SavedMovies.css'
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";


function SavedMovies() {

  return (
    <section className='saved-movies' aria-label='movies'>
      <SearchForm />
      <MoviesCardList />
       {<p className="saved-movies__error">Ничего не найдено</p>}
    </section>
  )
}

export default SavedMovies
