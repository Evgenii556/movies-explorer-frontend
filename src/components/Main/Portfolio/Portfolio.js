import './Portfolio.css';
import arrow from '../../../images/arrow.png'

function Portfolio() {

  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a href='https://github.com/Evgenii556/how-to-learn'
            className='link portfolio__link'
            target='_blank'
            rel="noreferrer">
            <p className='portfolio__link-text'>Статичный сайт</p>
            <img className='portfolio__arrow' src={arrow} alt='стрелка'></img>
          </a>
        </li>
        <li className='portfolio__item'>
          <a href='https://github.com/Evgenii556/russian-travel'
            className='link portfolio__link'
            target='_blank'
            rel="noreferrer">
            <p className='portfolio__link-text'>Адаптивный сайт</p>
            <img className='portfolio__arrow' src={arrow} alt='стрелка'></img>
          </a>
        </li>
        <li className='portfolio__item'>
          <a href='https://github.com/Evgenii556/react-mesto-api-full-gha'
            className='link portfolio__link'
            target='_blank'
            rel="noreferrer">
            <p className='portfolio__link-text'>Одностраничное приложение</p>
            <img className='portfolio__arrow' src={arrow} alt='стрелка'></img>
          </a>
        </li>
      </ul>

    </section>
  );
};

export default Portfolio;
