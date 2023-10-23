import './AboutMe.css'
import photo from '../../../images/stusentphoto.png'

function AboutMe() {
  return (
    <section className="about" id="student">
      <h2 className="about__title">Студент</h2>
      <div className="about__card">
        <h3 className="about__name">Виталий</h3>
        <span className="about__info">Фронтенд-разработчик, 30 лет</span>
        <p className="about__text">
          Я родился и живу в Саратове, закончил факультет
          экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом.
          Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл
          курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
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
