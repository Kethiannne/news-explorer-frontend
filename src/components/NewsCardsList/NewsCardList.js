import React from 'react';
import NewsCard from '../NewsCard/NewsCard';

export default function NewsCardList(props) {

  const newsCardListMod = props.listMod

  return(
    <div className='newsCardList'>
      <h2 className={`newsCardList__title ${newsCardListMod}`}>Search Results</h2>

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
  )
}
