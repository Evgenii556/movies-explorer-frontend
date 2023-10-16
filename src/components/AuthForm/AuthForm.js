import './AuthForm.css';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg';

function AuthForm({ text, button, question, title, link, children }) {

  return (
    <>
      <Link
        to="/"
        className="form__logo"
      >
        <img src={logo} className="form__logo-img" alt="лого" />
      </Link>
      <h1 className="form__title">{text}</h1>
      <div className="form__container">
        <form
          className="form__form"
          id="authForm"
          name="authForm"
          noValidate
          autoComplete="off"
        >
          {children}
          <button className="form__button" type="submit">{button}</button>
        </form>
        <div className="form__link-container">
          <p className="form__link-title">{question}</p>
          <Link
            to={link}
            className="form__link"
          >
            {title}
          </Link>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
