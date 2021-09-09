import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import Preloader from '../Preloader/Preloader';

export default function NewsCardList(props) {

  const newsCardListMod = props.listMod;
  const searchResults = (
    <h2 className={`newsCardList__title ${newsCardListMod}`}>
    Search Results
    </h2>
  );
  const cardList = (
    <div className='newsCardList__container'>
      { props.newsCards.map((newsCard) =>
        {
          return (<NewsCard
                    key= { newsCard._id }
                    {...newsCard }
                    isLoggedIn={ props.isLoggedIn }
                    page={ props.page }
                    newsCardSave={props.newsCardSave}
                    newsCardDelete={props.newsCardDelete}
                  />)
        })
      }
    </div>
  );
  const showMoreButton = (
    <button className='newsCardList__loadButton button-hover'>Show More</button>
  );
  return(
    <div className='newsCardList'>

      {((props.loading === false) && (props.results === true) && (props.page === 'main')) ?
        searchResults : ''
      }

      {props.loading === false ? cardList : <Preloader/>}

      {((props.loading === false) && (props.results === true) && (props.page === 'main')) ?
       showMoreButton : ''
      }

    </div>
  )
}
