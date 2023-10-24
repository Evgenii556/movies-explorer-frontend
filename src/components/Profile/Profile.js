import './Profile.css';
import { useState, useContext, useEffect } from 'react';
import { useForm } from '../UseForm/UseForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function Profile({ updateUser, signOut }) {



  const currentUser = useContext(CurrentUserContext)
  const [isEditProfile, setIsEditProfile] = useState(false);


  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateUser(values);
  }

  const {
    values,
    handleChange,
    errors,
    isValid,
    setValues
  } = useForm();

  useEffect(() => {
    setValues({
      userName: currentUser.name,
      email: currentUser.email
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className='profile' aria-label='профиль'>
      <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
      <form className='profile__form' noValidate onSubmit={handleSubmit}>
        <div className='profile__input-container'>
          <label className='profile__label'>Имя</label>
          <input
            name='userName'
            type='text'
            className="profile__input"
            placeholder='Виталий'
            minLength='2'
            maxLength='30'
            required
            autoComplete="off"
            value={values['userName'] || ''}
            onChange={handleChange}
          />
        </div>
        <span
          className="profile__error"
        >
          {errors.userName}
        </span>
        <div className='profile__input-container'>
          <label className='profile__label'>E-mail</label>
          <input
            name='email'
            type='email'
            className="profile__input"
            placeholder='placeholder@yans.ru'
            minLength='2'
            maxLength='30'
            required autoComplete="off"
            onChange={handleChange}
            value={values['email'] || ''}
          />
        </div>
        <span
          className="profile__error"
        >
          {errors.email}
        </span>
        <div className='profile__buttons-container'>
          {isEditProfile ?
            <>
              <button type='submit'
                className={`button profile__submit ${isValid ? 'form__button_disabled' : ''}`}
                disabled={!isValid}
              >
                Сохранить
              </button>
            </>
            :
            <>
              <button type='button'
                className={`profile__button ${isValid ? '' : 'profile__button_disabled'}`}
                disabled={!isValid}
                onClick={() => setIsEditProfile((prev) => !prev)}>
                Редактировать</button>
              <button type='button' className='profile__button profile__button-exit' onClick={signOut} >Выйти из аккаунта</button>
            </>
          }
        </div>
      </form>
    </section>
  );
};

export default Profile;
