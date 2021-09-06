import React from 'react';
import Navigation from '../Navigation/Navigation'

export default function Header (props) {
  const page= props.page;
  const headerMod = function (page) {
    if (page === 'main') {
      return 'main__header'
    }
    else if (page === 'savedNews') {
      return 'header__black-text'
    }
  }

  return (
    <div className={ `header ${ headerMod(props.page) }` }>
      <h3 className='header__title'>NewsExplorer</h3>
      <Navigation
        isLoggedIn={ props.isLoggedIn }
        handleLogout={ props.handleLogout }
        openLogin={ props.openLogin }
        navMod={ headerMod(props.page) }
        page={ props.page }
      />
    </div>
  )
}
