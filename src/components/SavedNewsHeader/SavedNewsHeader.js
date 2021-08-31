import React from 'react';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';

export default function SavedNewsHeader (props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className='savedNewsHeader'>
      <Header isLoggedIn={ props.isLoggedIn }>
      </Header>
      <div className='savedNewsHeader__about'>

        <p className='savedNewsHeader__about-description'>Saved Articles</p>

        <h1 className='savedNewsHeader__about-title'>
        { currentUser.name }, you have {
          {/* need to find a way to save a number representing the number of saved articles
          and get it here */}
        } saved articles
        </h1>
        <h3 className='savedNewsHeader__about-subtitle'>
          By keywords: <span className='savedNewsHeader__boldText'>{
          {/* need to find a way to save the keywords of saved articles
          and get them here */}
        }</span>
        </h3>

      </div>
    </div>
  )

}
