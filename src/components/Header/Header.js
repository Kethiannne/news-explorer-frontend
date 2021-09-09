import React from 'react';
import Navigation from '../Navigation/Navigation'

export default function Header (props) {

  const headerMod = function (page) {
    if (page === 'savedNews') {
      return 'black-text header__underline_dark'
    }

    return 'header__main header__underline_light'

  }

  return (
    <div className={ `header ${ headerMod(props.page) }` }>
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
    </div>
  )
}
