import { BEATFILM_URL } from "./constants";

class BeatFilm {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
  }

  _getResponse(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }

  getMovies() {
    return fetch(`${this._url}/beatfilm-movies`, {
      headers: this._headers,
    })
      .then(this._getResponse);
  }
}

const beatfilm = new BeatFilm({
  baseUrl: BEATFILM_URL,
  headers: {
    'Content-Type': 'application/json'
  }

});

export default beatfilm;
