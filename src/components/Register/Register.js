import './Register.css'
import Form from '../AuthForm/AuthForm';
import InputField from '../InputField/InputField';
import { useForm } from '../UseForm/UseForm';

function Register({ handleRegister, isBlocked }) {

  const handleSubmit = (data) => {
    handleRegister(data);
  }

  const {
    values,
    handleChange,
    errors,
    isValid,
  } = useForm();


  return (
    <div className='register'>
      <section className='register__container' aria-label='регистрация'>
        <Form
          text='Добро пожаловать!'
          button='Зарегистрироваться'
          question='Уже зарегистрированы?'
          title='Войти'
          link='/signin'
          onSubmit={() => handleSubmit(values)}
          isValid={isValid}
          isBlocked={isBlocked}
        >
          <InputField
            name="userName"
            id="user"
            title="Имя"
            type="text"
            placeholder="Имя"
            minLength="2"
            maxLength="30"
            values={values}
            error={errors}
            onChange={handleChange}
            isBlocked={isBlocked}
          />

          <InputField
            name="email"
            id="email"
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
            name="password"
            id="password"
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

export default Register;
