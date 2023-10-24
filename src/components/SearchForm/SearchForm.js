import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useState, useEffect, } from 'react';
import { useLocation } from 'react-router-dom';

function SearchForm({ isChek, sortMovies, toggleChek }) {

  const [key, setKey] = useState('');
  const [noText, setNoText] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
    if ((location === '/movies')) {
      setKey(localStorage.getItem('key') || '')
    }
  }, [location]);

  function sortMovie(e) {
    e.preventDefault();
    if (key.length < 1) {
      setNoText(true)
      return
    }
    sortMovies(key)
  }

  function handleTextChange(e) {
    setNoText(false);
    setKey(e.target.value);

  }

  return (
    <section className='search' aria-label='поиск'>
      <form className='search__container'
        onSubmit={sortMovie}
        noValidate>
        <div className='search__form'>
          <input id='movie-search' name='movie' className='search__input' type='text'
            placeholder='Фильм' autoComplete='off' required
            onChange={handleTextChange}
            value={key}
          />
          <button className='search__button' type='submit' />
        </div>
        <FilterCheckbox
          isChek={isChek}
          toggleChek={toggleChek}
        />
      </form>
      {noText && <span className='search__notext'>Нужно ввести ключевое слово</span>}
    </section>
  );
};

export default SearchForm;
