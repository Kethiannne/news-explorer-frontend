import React from 'react';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { keywords, savedArticles } from '../../utils/constants'

export default function SavedNewsHeader (props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <div className='savedNewsHeader'>
      <Header
        isLoggedIn={ props.isLoggedIn }
        page={ props.page }
        openLogin={ props.openLogin }
        handleLogout={ props.handleLogout }
        isNavMenuOpen={ props.isNavMenuOpen }
        openNavMenu={ props.openNavMenu }
      >
      </Header>

      <div className='savedNewsHeader__about'>
        <p className='savedNewsHeader__subtitle'>Saved Articles</p>
        <h1 className='savedNewsHeader__title'>
          { currentUser.name ? currentUser.name : 'How did you get here? ' }, you have {
          savedArticles.length} saved articles
        </h1>
        <h3 className='savedNewsHeader__keywords'>
          By keywords:
          <span className='savedNewsHeader__boldText'>
            {
              keywords.length > 2 ?
              (`${keywords.slice(0, 2).toString()} and ${keywords.length - 2} other`) :
              (keywords.length > 0 ?
              keywords.toString() :
              'none')
            }
          </span>
        </h3>

      </div>
    </div>
  )

}
