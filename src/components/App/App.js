import './App.css'
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import Footer from '../Footer/Footer';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { footer, header } from '../../utils/renderPermissions';
import api from '../../utils/api';
import beatfilm from '../../utils/beatfilmApi';

function App() {
  const location = useLocation().pathname
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [beatMovies, setBeatMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isInfoToolTipOpened, setIsInfoToolTipOpened] = useState(false);
  const [text,setText] = useState('')

  const checkToken = (token) => {
    api.setToken(token);
    api.checkToken(token)
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setCurrentUser(res);
          navigate(location)
        } else {
          localStorage.removeItem('token');
          setIsLoggedIn(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setText(null)
        setIsInfoToolTipOpened(true)
      });
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken(token)
      handleGetMovies()
    }
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isLoggedIn]);

  const handleMovieDelete = (id) => {
    console.log(id);
    api.deleteCard(id)
      .then(() => {
        setMovies((movies) =>
          movies.filter((movie) => movie._id !== id));
      })
      .catch((err) => {
        console.log(err);
        setText(null)
        setIsInfoToolTipOpened(true)
      });
  }

  const handleUpdateUser = (data) => {
    api.editUserInfo(data)
      .then((newData) => {
        setCurrentUser(newData);
        setText('ok')
        setIsInfoToolTipOpened(true)
      })
      .catch((err) => {
        console.log(err);
        setText(null)
        setIsInfoToolTipOpened(true)
      });
  }

  const handleAddMovie = (data) => {
    api.addMovie(data)
      .then((newMovie) => {
        setMovies([newMovie, ...movies]);
      })
      .catch((err) => {
        console.log(err);
        setText(null)
        setIsInfoToolTipOpened(true)
      });
  }

  const handleGetMovies = () => {
    setLoading(true);
    api.getMovies()
      .then((movieList) => {
        setMovies(movieList);
      })
      .catch((err) => {
        console.log(err);
        setText(null)
        setIsInfoToolTipOpened(true)
      })
      .finally(() => setLoading(false));
  }

  const handleGetBeatMovies = () => {
    setLoading(true);
    return beatfilm.getMovies()
      .then((movieList) => {
        setBeatMovies(movieList);
        return movieList;
      })
      .catch((err) => {
        console.log(err);
        setText(null)
        setIsInfoToolTipOpened(true)
      })
      .finally(() => setLoading(false));
  }

  const handleRegister = ({ userName, email, password }) => {
    Promise.all([api.register({ userName, password, email }), api.authorize({ email, password })])
      .then(() => {
        setIsLoggedIn(true);
        navigate('/movies');
        setIsInfoToolTipOpened(true);
      })
      .catch((err) => {
        console.log(err);
        setText(null)
        setIsInfoToolTipOpened(true)
      });

  }

  const handleAuthorize = ({ email, password }) => {
    console.log({ email, password });
    api.authorize({ email, password })
      .then((res) => {
        setIsLoggedIn(true);
        navigate('/movies');
        localStorage.setItem('token', res._id);
        setText('ok')
        setIsInfoToolTipOpened(true)
      })
      .catch((err) => {
        console.log(err);
        setText(null)
        setIsInfoToolTipOpened(true)
      });
  }

  const handleSingOut = () => {
    setIsLoggedIn(false);
    setCurrentUser({})
    localStorage.removeItem('token');
    localStorage.removeItem('key');
    localStorage.removeItem("movies");
    localStorage.removeItem("short-movies");
    localStorage.removeItem("checkbox");
    navigate("/");
  }

  const closePopup = () => {
    setIsInfoToolTipOpened(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {header.includes(location) && <Header isLoggedIn={isLoggedIn} />}
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/movies' element={
            <ProtectedRoute
              element={
                <Movies
                  beatMovies={beatMovies}
                  savedMovies={movies}
                  setMovies={setBeatMovies}
                  addMovie={handleAddMovie}
                  deleteMovie={handleMovieDelete}
                  getBeatMovies={handleGetBeatMovies}
                  isLoading={loading}
                />
              } isLoggedIn={isLoggedIn} />
          } />
          <Route path='/saved-movies' element={
            <ProtectedRoute
              element={
                <SavedMovies
                  savedMovies={movies}
                  setMovies={setMovies}
                  deleteMovie={handleMovieDelete}
                  getMovies={handleGetMovies}
                  isLoading={loading}
                />
              } isLoggedIn={isLoggedIn} />
          } />
          <Route path='/profile' element={
            <ProtectedRoute
              element={
                <Profile
                  updateUser={handleUpdateUser}
                  signOut={handleSingOut}
                />
              } isLoggedIn={isLoggedIn} />
          } />
          <Route path='/signin' element={<Login handleLogin={handleAuthorize} />} />
          <Route path='/signup' element={<Register handleRegister={handleRegister} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      {footer.includes(location) && <Footer />}
      <InfoTooltip
        isOpen={isInfoToolTipOpened}
        onClose={closePopup}
        text={text}
      />
    </CurrentUserContext.Provider>
  );
}

export default App;
