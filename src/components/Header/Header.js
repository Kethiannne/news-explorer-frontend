import React from 'react';
import Navigation from '../Navigation/Navigation'

export default function Header (props) {
  return (
    <div className='header'>
      <h3 className='header__title'>NewsExplorer</h3>
      <Navigation
        isLoggedIn={ props.isLoggedIn }
        handleLogout={ props.handleLogout }
        openLogin={ props.openLogin }
      />
    </div>
  )
}
