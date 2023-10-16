import { useLocation } from 'react-router-dom';
import './MoviesCard.css'
function MoviesCard({movie}) {

 const location =  useLocation().pathname === '/movies'

  return (
    <li className="card">
      <a
        href={movie.trailerLink || 'https://yandex.ru/video/preview/13961353492771921746?text=мультик&path=yandex_search&parent-reqid=1697141606992881-1095689610004249428-balancer-l7leveler-kubr-yp-sas-150-BAL-183&from_type=xl'}
        className="card__trailer-link"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="card__image"
          alt={movie.nameRU}
          src={movie.url}
        />
      </a>
      <h2 className="card__name">{movie.nameRU}</h2>
      <p className="card__duration">
        {movie.duration}
      </p>
      {
        location  && <button
          type="button"
          className={`card__btn ${movie.saved ? 'card__btn_save' : 'card__btn_saved'}`}
        >
        </button>}
        {!location  && <button
          type="button"
          className='card__btn card__btn_delete'
        >
        </button>}
    </li>
  );
}

export default MoviesCard;
