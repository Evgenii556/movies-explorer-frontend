import './Profile.css';
import { useState, useContext, useEffect } from 'react';
import { useForm } from '../UseForm/UseForm';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { PATTERN } from '../../utils/constants';

function Profile({ updateUser, signOut, isBlocked }) {

  const currentUser = useContext(CurrentUserContext)
  const [isEditProfile, setIsEditProfile] = useState(false);
  const [noChanged, setNoChanged] = useState(true);


  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsEditProfile(false)
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
    currentUser.name === values.userName && currentUser.email === values.email ?
      setNoChanged(true) : setNoChanged(false);
  }, [values, currentUser.name, currentUser.email])

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
      <form className='profile__form' noValidate>
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
            pattern={PATTERN.userName}
            autoComplete="off"
            value={values['userName'] || ''}
            onChange={handleChange}
            readOnly={isEditProfile || isBlocked}
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
            pattern={PATTERN.email}
            required autoComplete="off"
            onChange={handleChange}
            value={values['email'] || ''}
            readOnly={isEditProfile || isBlocked}
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
              <button type='button'
                className={`button profile__submit ${(!isValid || noChanged || !isEditProfile) || isBlocked ? 'form__button_disabled' : ''}`}
                disabled={(!isValid || noChanged || !isEditProfile) || isBlocked}
                onClick={handleSubmit}
              >
                Сохранить
              </button>
            </>
            :
            <>
              <button
                type='button'
                className={`profile__button ${!isValid || noChanged ? 'profile__button_disabled' : ''}`}
                disabled={!isValid || noChanged}
                onClick={() => setIsEditProfile((prev) => !prev)}>
                Редактировать
              </button>
              <button type='button' className='profile__button profile__button-exit' onClick={signOut} >Выйти из аккаунта</button>
            </>
          }
        </div>
      </form>
    </section>
  );
};

export default Profile;
