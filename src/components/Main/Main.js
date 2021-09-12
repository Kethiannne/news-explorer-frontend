import React from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import NewsCardsList from '../NewsCardsList/NewsCardList'
import About from '../About/About';

import { useLocation } from 'react-router-dom';



export default function Main (props) {

  // Effect to open an alert if unauthorized traffic tries to go where they don't belong

  const location = useLocation();
  React.useEffect(()=>{
    if(location.state === 'Login Redirect') {
      alert('Login first to access saved articles');
    }
  },[])



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
