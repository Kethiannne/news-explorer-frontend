import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import NoCards from '../NoCards/NoCards';

export default function NewsCardList(props) {
  const [howMany, setHowMany] = React.useState(3);
  const newsCardListMod = props.listMod;

  function addThree() {
    setHowMany(howMany + 3);
  }

  const searchResults = (
    <h2 className={`news-card-list__title ${newsCardListMod}`}>
    Search Results
    </h2>
  );

  let key = 0;
  function assignKeys () {
    key = key + 1;
    return key;
  }

  const cardList = (
    <ul className='news-card-list__container'>
      { (props.page === 'main' ? props.newsCards.slice(0, howMany) : props.newsCards).map((newsCard) =>
        {

          function assignKeyword() {
            return props.page === 'main' ? props.keyword: newsCard.keyword
          }

          return (
            <NewsCard
              key={ assignKeys() }
              {...newsCard }
              isLoggedIn={ props.isLoggedIn }
              openLogin={ props.openLogin }
              keyword={ assignKeyword() }
              page={ props.page }
              savedArticles={ props.savedArticles }
              setSavedArticles={ props.setSavedArticles }
              newsCardSave={props.newsCardSave}
              newsCardDelete={props.newsCardDelete}
            />)
        })
      }
    </ul>
  );

  const showMoreButton = (
    <button className='news-card-list__loadButton button-hover' onClick={ addThree }>Show More</button>
  );

  return(
    <div className='news-card-list'>

      {((props.loading === false) && (props.results === true) && (props.page === 'main')) ?
        searchResults : ''
      }

      {(props.loading === false && props.results === true) ? cardList : <NoCards loading={ props.loading } results={ props.results }/>}

      {((props.loading === false) &&
        (props.results === true) &&
        (props.page === 'main') &&
        (howMany <= props.newsCards.length)) ?
       showMoreButton : ''
      }

    </div>
  )
}
