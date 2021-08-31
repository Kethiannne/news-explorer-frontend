

class Api {
  constructor({baseURL, headers}) {
    this._baseURL = baseURL;
    this._headers = headers;
  }

  _getSuccessfulReturn(res){
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }

  _setJwtHeaders(jwt){
    const bearer = 'Bearer ' + jwt;
    if(jwt !== '') {
      return {
          authorization: bearer,
          "Content-Type": "application/json"
        }

    }
    return {
      headers: {
        "Content-Type": "application/json"
      }
    }
  }

  createArticle(jwt, {
    keyword, title, text, date, source, link, image
  }) {
    return fetch(this._baseURL + `/articles`, {
      headers: this._setJwtHeaders(jwt),
      method: "POST",
      body: JSON.stringify({
        keyword, title, text, date, source, link, image
      })
    })
      .then(res => {
        return this._getSuccessfulReturn(res);
      })
  }

  deleteArticle(jwt, id){
    return fetch(this._baseURL + `/articles/` + id, {
      headers: this._setJwtHeaders(jwt),
      method: "DELETE",
    })
      .then(res => {
        return this._getSuccessfulReturn(res);
      })
  }

  getUserInfo(jwt){
    return fetch(this._baseURL + `/users/me`, {
      headers: this._setJwtHeaders(jwt)
    })
      .then(res => {
        return this._getSuccessfulReturn(res);
      })
  }

  getUserArticles(jwt){
    return fetch(this._baseURL + `/articles`, {
      headers: this._setJwtHeaders(jwt)
    })
      .then(res => {
        return this._getSuccessfulReturn(res);
      })
  }

}

export default new Api({
  baseURL: process.env.NODE_ENV === "production" ? 'https://api.kethnews.students.nomoreparties.site' : 'http://localhost:3000',
});
