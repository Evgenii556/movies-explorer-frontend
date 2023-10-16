import './Profile.css';
import { useState } from 'react';

function Profile() {

  const [isEditProfile, setIsEditProfile] = useState(false);

  return (
      <section className='profile' aria-label='профиль'>
        <h1 className='profile__title'>Привет, {'Виталий'}!</h1>
        <form className='profile__form' noValidate>
          <div className='profile__input-container'>
            <label className='profile__label'>Имя</label>
            <input
              type='text'
              className="profile__input"
              placeholder='Виталий'
              minLength='2'
              maxLength='40'
              required
              autoComplete="off" />
          </div>
          <div className='profile__input-container'>
            <label className='profile__label'>E-mail</label>
            <input type='email'
              className="profile__input"
              placeholder='placeholder@yans.ru'
              name='name'
              minLength='2'
              maxLength='40'
              required autoComplete="off" />
          </div>
          <div className='profile__buttons-container'>
            {isEditProfile ?
              <>
                <button type='submit' className='button profile__submit'>Сохранить</button>
              </>
              :
              <>
                <button type='button' className='profile__button' onClick={() => setIsEditProfile((prev) => !prev)}>Редактировать</button>
                <button type='button' className='profile__button profile__button-exit' >Выйти из аккаунта</button>
              </>
            }
          </div>
        </form>
      </section>
  );
};

export default Profile;
