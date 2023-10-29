import { useLocation } from 'react-router-dom';
import './MoviesCard.css'


function MoviesCard({ movie, image, addMovie, deleteMovie, savedMovies }) {

  const isSaved = savedMovies.find(m => m.nameEN === movie.nameEN);
  const divideToHourAndMinutes = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    return `${hours ? `${hours}ч` : ''} ${minutes}м`;
  }

  const inMovies = useLocation().pathname === '/movies'

  function handleAddMovie() {
    addMovie(
      {
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: image,
        trailerLink: movie.trailerLink,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
      }
    )
  }

  function handleDeleteMovie() {
    deleteMovie(isSaved._id)
  }


  return (
    <li className="card">
      <a
        href={movie.trailerLink}
        className="card__trailer-link"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="card__image"
          alt={movie.nameRU}
          src={image}
        />
      </a>
      <h2 className="card__name">{movie.nameRU}</h2>
      <p className="card__duration">
        {divideToHourAndMinutes(movie.duration)}
      </p>
      {
        inMovies && <button
          type="button"
          className={`card__btn ${isSaved ? 'card__btn_saved' : 'card__btn_save'}`}
          onClick={isSaved ? handleDeleteMovie : handleAddMovie}
        >
        </button>}
      {!inMovies && <button
        type="button"
        className='card__btn card__btn_delete'
        onClick={handleDeleteMovie}
      >
      </button>}
    </li>
  );
}

export default MoviesCard;
