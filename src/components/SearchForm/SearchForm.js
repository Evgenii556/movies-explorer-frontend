import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {


  return (
    <section className='search' aria-label='поиск'>
      <form className='search__container' >
        <div className='search__form'>
          <input id='movie-search' name='movie' className='search__input' type='text'
            placeholder='Фильм' autoComplete='off'
          />
          <button className='search__button' type='submit' />
        </div>
        <FilterCheckbox
        />
      </form>
    </section>
  );
};

export default SearchForm;
