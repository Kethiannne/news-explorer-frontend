import React from 'react';
import { keywords, savedArticles } from '../../utils/constants';

export default function NewsCard(props) {
  const [saved, setSaved] = React.useState(false)
  const isLoggedIn = props.isLoggedIn;

  //functions for adding onto a list of keywords and number of saved cards
  function savedIndexing(arr, item){
    if ((arr.indexOf(item) === -1)) {
      return arr.push(`${item}`)
    }
  }

  function keywordIndexing(arr, item){

      return arr.push(` ${item}`)

  }

  savedIndexing(savedArticles, props._id);
  keywordIndexing(keywords, props.keyword);

  function handleSave() {
    setSaved(true);
    props.newsCardSave(props);
  }

  function handleDelete() {
    setSaved(false);
    props.newsCardDelete(props._id);
  }

  return (
    <li className="news-card">
      <div className="news-card__image"
        style={{ backgroundImage: `url(${props.urlToImage})` }}
        onClick={(evt)=>{
          if (evt.target === evt.currentTarget){
            window.open({pathname: props.src})
          }
        }}
      >
          <div className={`news-card__toolTip ${props.page === 'main' ? `news-card__keyword`: ``}`}>
          <p className='news-card__tooltip-text'>
            {props.keyword}
          </p>
        </div>

        <div className='news-card__util-container'>
          <button
            className= {
              `news-card__util
              ${ (props.page === 'main') ?
              (saved === true ? `news-card__saved`: 'news-card__save') :
              `news-card__delete`}
              ${ isLoggedIn ? `` : `news-card__toolTip_hover` }
              `
            }

            // Handles what the button does under different conditions.
            // allows it to be both the save and delete button,
            // and to make the tooltip visible when clicked while the user isnt logged in
            onClick={
              function () {
                if (isLoggedIn) {
                  return (props.page === 'main') ? handleSave() : handleDelete()
                }
                props.openLogin();
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
          { new Date(props.publishedAt).toDateString() }
        </p>

        <h2 className="news-card__title">
          { props.title }
        </h2>

        <p className=' line-clamp news-card__text'>
          { props.description }
        </p>

        <p className='news-card__source'>
          { props.page === 'main' ? props.source.name : props.src }
        </p>
      </article>
    </li>
  )
}
