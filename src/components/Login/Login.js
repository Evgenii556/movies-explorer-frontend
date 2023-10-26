import './Login.css';
import Form from '../AuthForm/AuthForm';
import InputField from '../InputField/InputField';
import { useForm } from '../UseForm/UseForm';

function Login({ handleLogin, isBlocked }) {

  const handleSubmit = (data) => {
    handleLogin(data);
  }

  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useForm();

  return (
    <div className='login'>
      <section className='login__container' aria-label='авторизация'>
        <Form
          text='Рады видеть!'
          button='Войти'
          question='Ещё не зарегистрированы?'
          title='Регистрация'
          link='/signup'
          onSubmit={() => handleSubmit(values)}
          isValid={isValid}
          isBlocked={isBlocked}
        >
          <InputField
            id="email"
            name="email"
            title="E-mail"
            type="email"
            placeholder="Почта"
            maxLength="30"
            values={values}
            error={errors}
            onChange={handleChange}
            isBlocked={isBlocked}
          />

          <InputField
            id="password"
            name="password"
            title="Пароль"
            type="password"
            placeholder="Пароль"
            minLength="8"
            maxLength="20"
            values={values}
            error={errors}
            onChange={handleChange}
            isBlocked={isBlocked}
          />
        </Form>
      </section>
    </div>
  );
};

export default Login;
