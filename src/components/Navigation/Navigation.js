import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import logout from '../../images/logout.png';
import logout_light from '../../images/logout_light.png';

export default function Navigation (props) {
  const currentUser = React.useContext(CurrentUserContext);

  function renderMarkUp() {
    if (props.isLoggedIn) {
      return (
        <div className='nav'>

        <Link to='/' className={`nav__link button-hover
        ${props.page === 'main' ? `nav__link-underline`: 'nav__link_inactive'}`}>
          Home
        </Link>

        <Link
          to='/saved-news'
          className={`nav__link button-hover ${props.navMod}
          ${props.page === 'savedNews' ? `nav__link-underline_dark`: 'nav__link_inactive'}`}
        >
          Saved articles
        </Link>

        <button
          type="button"
          className={`nav__button nav__button_logout button-hover ${props.navMod}`}
          onClick={ props.handleLogout }
        >
          { currentUser.name ? currentUser.name : 'Playing with Dev tools?' }
          <img src={ props.page === 'main' ? logout_light: logout } className='nav__logout-img' alt='logout'/>
        </button>

        </div>
      )
    }
    return (
      <div className='nav'>

      <Link to='/' className={`nav__link button-hover
        ${props.page === 'main' ? `nav__link-underline`: ''}`}>
        Home
      </Link>
      <button
        type="button"
        className={`nav__button button-hover  button-hover`}
        onClick={ props.openLogin }
      >
          Sign in
      </button>

      </div>
    )
  }

  return (
    renderMarkUp()
  )
}
