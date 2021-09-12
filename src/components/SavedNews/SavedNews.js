import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardsList from '../NewsCardsList/NewsCardList'

export default function SavedNews (props) {

  return (
    <main>
      <SavedNewsHeader
        isLoggedIn={ props.isLoggedIn }
        openLogin={ props.openLogin }
        openNavMenu={ props.openNavMenu }
        isNavMenuOpen={ props.isNavMenuOpen }
        handleLogout={ props.handleLogout }
        page={ 'savedNews' }
      />
      <NewsCardsList
        isLoggedIn={ props.isLoggedIn }
        loading={ props.loading }
        results={ props.results }
        newsCards={ props.newsCards }
        page={ 'savedNews' }
        newsCardDelete={props.newsCardDelete}
      />
    </main>
  )
}
