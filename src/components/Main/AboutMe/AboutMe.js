import './AboutMe.css'
import photo from '../../../images/stusentphoto.png'

function AboutMe() {
  return (
    <section className="about" id="student">
      <h2 className="about__title">Студент</h2>
      <div className="about__card">
        <h3 className="about__name">Евгений</h3>
        <span className="about__info">Фронтенд-разработчик, 22 года</span>
        <p className="about__text">
          Я родился и живу в Екатеринбурге, закончил колледж "УПК-МЦК" с отличием. В свободное время занимаюсь карточными фокусами и иллюзиямию, так же люблю походы.
          Всегда хотел заниматся аналитикой.
          Для понимания как устроен продукт "с другой стороны" прошел курс веб-разработчика
        </p>
        <a className="about__link"
          href='https://github.com/Evgenii556'
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <img className='about__photo' src={photo} alt="фото" />
      </div>
    </section>
  )
}

export default AboutMe;
