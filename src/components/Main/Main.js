import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardsList from '../NewsCardsList/NewsCardList'
import About from '../About/About';

export default function Main (props) {

  return (
    <main>
      <div className='header-news-wrapper'>
        <Header
          isLoggedIn={ props.isLoggedIn }
          openNavMenu={ props.openNavMenu }
          handleLogout={ props.handleLogout }
          openLogin={ props.openLogin }
          page={ 'main' }
        />
        <SearchForm
          onSubmit={ props.searchSubmit }
        />
      </div>
      <NewsCardsList
        isLoggedIn={ props.isLoggedIn }
        loading={ props.loading }
        results={ props.results }
        newsCards={ props.newsCards }
        page={ 'main' }
        newsCardSave={props.newsCardSave}
      />
      <About/>
    </main>
  )
}
