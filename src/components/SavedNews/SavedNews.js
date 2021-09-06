import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardsList from '../NewsCardsList/NewsCardList'

export default function SavedNews (props) {

  return (
    <main>
      <SavedNewsHeader
        isLoggedIn={ props.isLoggedIn }
        openLogin={ props.openLogin }
        handleLogout={ props.handleLogout }
        page={ 'savedNews' }
      />
      <NewsCardsList
        isLoggedIn={ props.isLoggedIn }
        newsCards={ props.newsCards }
        page={ 'savedNews' }
      />
    </main>
  )
}
