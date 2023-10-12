import './Register.css'
import Form from '../AuthForm/AuthForm';
import InputField from '../InputField/InputField';


function Register() {

  return (
    <main className='main'>
      <div className='register'>
        <section className='register__container' aria-label='регистрация'>
          <Form
            text='Добро пожаловать!'
            button='Зарегистрироваться'
            question='Уже зарегистрированы?'
            title='Войти'
            link='/signin'
          >
            <InputField
              name="user"
              id="user"
              title="Имя"
              type="text"
              placeholder="Имя"
              minLength="2"
              maxLength="30"
            />

            <InputField
              name="email"
              id="email"
              title="E-mail"
              type="email"
              placeholder="Почта"
              minLength="8"
              maxLength="30"
            />

            <InputField
              name="password"
              id="password"
              title="Пароль"
              type="password"
              placeholder="Пароль"
              minLength="6"
              maxLength="20"
            />
          </Form>
        </section>
      </div>
    </main>
  );
};

export default Register;
