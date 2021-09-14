import React from 'react';

export default function NewsCard(props) {
  const isLoggedIn = props.isLoggedIn;

  // Function had to be duplicated here to avoid error where one component is not allowed to alter another one
  function savedIndexing(url, id){
    if (!props.savedArticles.hasOwnProperty(url) && id !== undefined) {
      return props.setSavedArticles({...props.savedArticles, [url]: id});
    }
  }

  // If we're on the saved-news page this tries to add the cards to our saved cards list
  React.useEffect(()=>{
    return props.page === 'main' ? '' : savedIndexing(props.url, props._id)
  },[])

  function handleSave() {
    props.newsCardSave(props);
  }

  function handleDelete(url) {
    console.log(url);
    props.newsCardDelete(url);
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
              (props.savedArticles.hasOwnProperty(props.url) === true ? `news-card__saved`: 'news-card__save') :
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
                  return (props.page === 'main' && (props.savedArticles.hasOwnProperty(props.url) === false)) ?
                  handleSave() :
                  handleDelete(props.url)
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
