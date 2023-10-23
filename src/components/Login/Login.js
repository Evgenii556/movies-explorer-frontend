import './Login.css';
import Form from '../AuthForm/AuthForm';
import InputField from '../InputField/InputField';

function Login() {

  return (
      <div className='login'>
        <section className='login__container' aria-label='авторизация'>
          <Form
            text='Рады видеть!'
            button='Войти'
            question='Ещё не зарегистрированы?'
            title='Регистрация'
            link='/signup'
          >
            <InputField
              id="email"
              name="email"
              title="E-mail"
              type="email"
              placeholder="Почта"
              minLength="8"
              maxLength="30"
            />

            <InputField
              id="password"
              name="password"
              title="Пароль"
              type="password"
              placeholder="Пароль"
              minLength="6"
              maxLength="20"
            />
          </Form>
        </section>
      </div>
  );
};

export default Login;
