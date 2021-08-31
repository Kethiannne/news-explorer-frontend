import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardsList from '../NewsCardsList/NewsCardList'
import About from '../About/About';

export default function Main (props) {
  return (
    <main className='page__wrapper'>
      <div className='header-news-wrapper'>
        <Header
          isLoggedIn={props.isLoggedIn}
        />
        <SearchForm
        />
        <NewsCardsList
        />
        <About/>
      </div>
    </main>
  )
}
