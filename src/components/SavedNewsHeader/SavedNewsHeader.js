import React from 'react';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';

export default function SavedNewsHeader (props) {
  const currentUser = React.useContext(CurrentUserContext);
  let userKeywords = '';

    (function () {
    if (currentUser.keywords) {
      return (
        userKeywords = currentUser.keywords.length > 2 ? (`${currentUser.keywords.slice(0, 2).toString()} and ${currentUser.keywords.length - 2} other`) :
        currentUser.keywords.toString
      )}
    return userKeywords ='None'
    })()

  return (
    <div className='savedNewsHeader'>
      <Header
        isLoggedIn={ props.isLoggedIn }
        page={ props.page }
        navMod={ 'header__black-text' }
        openLogin={ props.openLogin }
        handleLogout={ props.handleLogout }
      >
      </Header>
      <div className='savedNewsHeader__about'>

        <p className='savedNewsHeader__subtitle'>Saved Articles</p>

        <h1 className='savedNewsHeader__title'>
      { currentUser.name ? currentUser.name : 'How did you get here? ' }, you have {
      // for now there is no current user keywords currentUser.keywords.length
       0} saved articles
        </h1>
        <h3 className='savedNewsHeader__keywords'>
          By keywords: <span className='savedNewsHeader__boldText'>{ userKeywords }</span>
        </h3>

      </div>
    </div>
  )

}
