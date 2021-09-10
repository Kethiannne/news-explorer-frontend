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

  const cardList = (
    <ul className='news-card-list__container'>
      { (props.page === 'main' ? props.newsCards.slice(0, howMany) : props.newsCards).map((newsCard) =>
        {
          return (
            <NewsCard
              key= { newsCard._id }
              {...newsCard }
              isLoggedIn={ props.isLoggedIn }
              page={ props.page }
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

      {((props.loading === false) && (props.results === true) && (props.page === 'main')) ?
       showMoreButton : ''
      }

    </div>
  )
}
