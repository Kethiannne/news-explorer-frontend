export const settings = {
  inputSelector: ".form__field",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__save-button_disabled",
  inputErrorClass: "form__field_error",
  errorClass: "form__field-error_active"
};

export const defaultCardList = [
  {
    "_id": {
        "$oid": "aaa"
    },
    "keyword": "forest",
    "title": "Big Trees",
    "text": "lotta trees in there, its a forest",
    "date": "June 21, 2010",
    "source": "A Dream I Had One Time",
    "link": "https://www.nytimes.com/2021/08/23/travel/mongolia-dukha-reindeer-herders.html",
    "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.newoxfordreview.org%2Fwp-content%2Fuploads%2FBanyan-Tree.jpg&f=1&nofb=1",
    "owner": {
        "$oid": "aaa"
    }
}
]

export const keywords = [];
export const savedArticles = [];
