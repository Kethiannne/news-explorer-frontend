import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardsList from '../NewsCardsList/NewsCardList'
import About from '../About/About';

export default function Main (props) {

  return (
    <main className='main__wrapper'>
      <div className='header-news-wrapper'>
        <Header
          isLoggedIn={ props.isLoggedIn }
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
        newsCards={ props.newsCards }
        page={ 'main' }
        newsCardSave={props.newsCardSave}
      />
      <About/>
    </main>
  )
}
