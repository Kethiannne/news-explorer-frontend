

class NewsApi {
  constructor({baseURL, headers}) {
    this._baseURL = baseURL;
    this._headers = headers;
    this._bearer = 'f37cd62de54746ffb8fc51dfe51d3030';
  }


  _getFormattedDate(date) {
    date = new Date(date);
    const year = date.getFullYear();

    const month = date.getMonth() + 1;
    const formattedMonth = month < 10 ? '0' + month : month;

    const day = date.getDate();
    const formattedDay = day < 10 ? '0' + day : day;

    return (year + '-' + formattedMonth + '-' + formattedDay);
  }

  _getFromDate(){
    let date = new Date();
    const past = date.setTime(date.getTime() + (-7 * 24 * 60 * 60 * 1000));
    return this._getFormattedDate(past)
  }

  _getToDate(){
    const date = new Date();
    return this._getFormattedDate(date);
  }

  _getSuccessfulReturn(res){
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  }

  getArticles(query){
    return fetch(this._baseURL + `/everything?q=${query}&from=${this._getFromDate}&to=${this._getToDate}&apiKey=${this._bearer}&pageSize=100`)
      .then(res => {
        console.log(res)
        return this._getSuccessfulReturn(res);
      })
  }

}

export default new NewsApi({
  baseURL: 'https://nomoreparties.co/news/v2/',
});
