import './App.css'
import { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import { footer, header } from '../../utils/renderPermissions';


function App() {
  const location = useLocation().pathname
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {header.includes(location) && <Header isLoggedIn={isLoggedIn} />}
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='movies' element={<Movies />} />
          <Route path='saved-movies' element={<SavedMovies />} />
          <Route path='profile' element={<Profile />} />
          <Route path='signin' element={<Login />} />
          <Route path='signup' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      {footer.includes(location) && <Footer />}
    </>
  );
}

export default App;
