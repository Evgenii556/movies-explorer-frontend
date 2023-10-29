import { API_URL } from "./constants";

class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  setToken(token) {
     this._headers['Authorization'] = `Bearer ${token}`
  }

  _getResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  register({email, password, userName}) {
    console.log(userName, email, password);
    console.log(api);
    return fetch(this._url + '/signup', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password: password,
        email: email,
        name:userName,
      }),

    }).then((res) => this._getResponse(res));
  }

  authorize({email, password}) {
    return fetch(this._url + '/signin', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        password: password,
        email: email,
      }),

    }).then((res) => this._getResponse(res));
  }

  checkToken() {
    return this.getUserInfo()
  }

  getUserInfo() {
    return fetch(this._url + '/users/me', {
      method: 'GET',
      headers: this._headers,
    }).then(this._getResponse);
  }

  editUserInfo(data) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.userName,
        email: data.email
      }),
    })
      .then(this._getResponse);
  }

  getMovies() {
    return fetch(`${this._url}/movies`, {
      headers: this._headers,
    })
      .then(this._getResponse);
  }

  addMovie(movieData) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        country: movieData.country,
        director: movieData.director,
        duration: movieData.duration,
        year: movieData.year,
        description: movieData.description,
        image: movieData.image,
        thumbnail:  movieData.thumbnail,
        trailerLink: movieData.trailerLink,
        movieId: movieData.movieId,
        nameRU: movieData.nameRU,
        nameEN: movieData.nameEN,
      }),
    }).then((res) => this._getResponse(res));
  }

  deleteCard(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._getResponse);
  }
}
const api = new Api({
  baseUrl: API_URL,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
});


export default api;
