import './Profile.css';
import { useState } from 'react';

function Profile() {

  const [isEditProfile, setIsEditProfile] = useState(false);

  return (
    <main className='main'>
      <section className='profile' aria-label='профиль'>
        <h1 className='profile__title'>Привет, {'Виталий'}!</h1>
        <form className='profile__form'>
          <div className='profile__input-container'>
            <label className='profile__label'>Имя</label>
            <input
              type='text'
              className="profile__input"
              placeholder='Виталий'
              minLength='minLength'
              maxLength='maxLength'
              required
              autoComplete="off" />
          </div>
          <div className='profile__input-container'>
            <label className='profile__label'>E-mail</label>
            <input type='email'
              className="profile__input"
              placeholder='placeholder@yans.ru'
              name='name'
              minLength='minLength'
              maxLength='maxLength'
              required autoComplete="off" />
          </div>
          <div className='profile__buttons-container'>
            {isEditProfile ?
              <>
                <button type='submit' className='button profile__submit'>Сохранить</button>
              </>
              :
              <>
                <button type='button' className='link profile__button' onClick={() => setIsEditProfile((prev) => !prev)}>Редактировать</button>
                <button type='button' className='link profile__button profile__button-exit' >Выйти из аккаунта</button>
              </>
            }
          </div>
        </form>
      </section>
    </main>
  );
};

export default Profile;
