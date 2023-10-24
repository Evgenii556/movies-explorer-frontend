import './FilterCheckbox.css';

function FilterCheckbox({ isChek, toggleChek }) {

  return (
    <div className="filter">
      <div className="filter__container">
        <input
          className="filter__checkbox"
          type="checkbox"
          id="chek"
          onChange={toggleChek}
          checked={isChek || false}
        />
        <span className="filter__tumbler"></span>
        <span className="filter__text">Короткометражки</span>
      </div>
    </div>
  )
}

export default FilterCheckbox;
