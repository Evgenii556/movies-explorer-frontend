import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import logo from '../../images/logo.svg';
import menu from '../../images/menu_btn.svg';
import { useState } from 'react';



function Header({ isLoggedIn }) {
  const onMain = useLocation().pathname === '/';
  const [opened, setOpen] = useState(false);

  return (
    <header className={`header ${onMain && 'header_grey'}`}>
      <div className="header__container">
        <Link to="/">
          <img src={logo} className="header__logo" alt="логотип" />
        </Link>
        {isLoggedIn ? (
          <>
            <Navigation opened={opened} set={setOpen} />
          </>
        ) : (
          <nav className="header__navigate">
            <Link to="/signup" className="header__btn header__btn_signup">
              Регистрация
            </Link>
            <Link to="/signin" className="header__btn header__btn_signin">
              Войти
            </Link>
          </nav>
        )}
        {isLoggedIn && <img src={menu} className="header__menu" alt="логотип" onClick={()=>setOpen((p)=>!p)}/>}
      </div>
    </header>
  )
}

export default Header;
