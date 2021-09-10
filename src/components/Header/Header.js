import React from 'react';
import Navigation from '../Navigation/Navigation'

export default function Header (props) {

  const headerMod = function (page) {
    if (page === 'savedNews') {
      return 'black-text header_underline-dark'
    }

    return 'header__main header_underline-light'

  }

  return (
    <header className={ `header ${ headerMod(props.page) }` }>
      <h3 className='header__title'>NewsExplorer</h3>
      <Navigation
        isLoggedIn={ props.isLoggedIn }
        isNavMenuOpen={ props.isNavMenuOpen }
        handleLogout={ props.handleLogout }
        openLogin={ props.openLogin }
        openNavMenu={ props.openNavMenu }
        page={ props.page }
        onClose={ props.onClose }
      />
    </header>
  )
}
