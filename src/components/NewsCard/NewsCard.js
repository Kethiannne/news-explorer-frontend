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
    return `newsCard__util ${ (props.page === 'main') ?
      ((isSaved() === true) ? `newsCard__saved` : `newsCard__save` ) :
      `newsCard__delete`}`

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
    <div className="newsCard">
      <div className="newsCard__image"
        style={{ backgroundImage: `url(${props.image})` }}
      >
          <div className={`newsCard__toolTip ${props.page === 'main' ? `newsCard__keyword`: ``}`}>
          <p className='newsCard__tooltip-text'>
            {props.keyword}
          </p>
        </div>

        <div className='newsCard__util-container'>
          <button
            className= {`${ newsCardUtilButton() } ${ isLoggedIn ? `` : `newsCard__toolTip_hover` }`}

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

          <div className='newsCard__toolTip newsCard__popIn'>
            <p className='newsCard__tooltip-text'>
              Sign in to save articles
            </p>
          </div>
        </div>

      </div>
      <article className="newsCard__article">
        <p className='newsCard__date'>
          { props.date }
        </p>

        <h2 className="newsCard__title">
          { props.title }
        </h2>

        <p className=' line-clamp newsCard__text'>
          { props.text }
        </p>

        <p className='newsCard__source'>
          { props.source }
        </p>
      </article>
    </div>
  )
}
