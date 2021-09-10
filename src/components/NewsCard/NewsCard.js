import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { keywords, savedArticles } from '../../utils/constants';

export default function NewsCard(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const isLoggedIn = props.isLoggedIn;

  // returns false if there is no current user or if the card owner doesnt match the card id
  const isSaved = function (){
    if (currentUser._id) {
      return props.owner._id === currentUser._id
    }
    return false
  };

  // Function for determining the util button's css
  function newsCardUtilButton() {
    return `news-card__util ${ (props.page === 'main') ?
      ((isSaved() === true) ? `news-card__saved` : `news-card__save` ) :
      `news-card__delete`}`

  };

  //functions for adding onto a list of keywords and number of saved cards
  function savedIndexing(arr, item){
    if (isSaved() === true && (arr.indexOf(item) === -1)) {
      return arr.push(`${item}`)
    }
  }
  function keywordIndexing(arr, item){
    if (isSaved() === true) {
      return arr.push(` ${item}`)
    }
  }

  savedIndexing(savedArticles, props._id);
  keywordIndexing(keywords, props.keyword);

  function handleSave() {
    props.newsCardSave(props);
  }

  function handleDelete() {
    props.newsCardDelete(props._id)
  }

  return (
    <li className="news-card">
      <div className="news-card__image"
        style={{ backgroundImage: `url(${props.image})` }}
      >
          <div className={`news-card__toolTip ${props.page === 'main' ? `news-card__keyword`: ``}`}>
          <p className='news-card__tooltip-text'>
            {props.keyword}
          </p>
        </div>

        <div className='news-card__util-container'>
          <button
            className= {`${ newsCardUtilButton() } ${ isLoggedIn ? `` : `news-card__toolTip_hover` }`}

            // Handles what the button does under different conditions.
            // allows it to be both the save and delete button,
            // and to make the tooltip visible when clicked while the user isnt logged in
            onClick={
              function () {
                if (isLoggedIn) {
                  return isSaved() ? handleDelete() : handleSave()
                }
            }}

            aria-label="Delete"
            type="button">
          </button>

          <div className='news-card__toolTip news-card__popIn'>
            <p className='news-card__tooltip-text'>
              Sign in to save articles
            </p>
          </div>
        </div>

      </div>
      <article className="news-card__article">
        <p className='news-card__date'>
          { props.date }
        </p>

        <h2 className="news-card__title">
          { props.title }
        </h2>

        <p className=' line-clamp news-card__text'>
          { props.text }
        </p>

        <p className='news-card__source'>
          { props.source }
        </p>
      </article>
    </li>
  )
}
