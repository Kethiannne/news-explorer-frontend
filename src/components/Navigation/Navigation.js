import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import logout from '../../images/logout.png';
import logout_light from '../../images/logout_light.png';

export default function Navigation (props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <nav className='nav'>
      <div className='nav__standard'>
        <Link
          to='/'
          className={
            `nav__link button-hover
            ${ props.page === 'main' ? `nav__link_underline`: 'nav__link_inactive' }`
          }
        >
          Home
        </Link>

        <div
          className={
            `${ props.page === 'savedNews' ? `nav__link_underline-dark`: '' }
            ${ props.isLoggedIn ? '': 'nav__noDisplay'}`
          }
        >
          <Link
            to='/saved-news'
            className={
              `nav__link button-hover
              ${ props.page === 'savedNews' ? `black-text`: 'nav__link_inactive'}`
            }
          >
          Saved articles
          </Link>
        </div>


        <button
          type="button"
          className={ `nav__button nav__button_logout button-hover
            ${ props.page === 'savedNews' ? 'black-text nav__button_logout_black': '' }
            ${ props.isLoggedIn ? '': 'nav__noDisplay'}`
          }
          onClick={ props.handleLogout }
        >
          <div
            className='nav__logout-text'
          >
            { currentUser.name ? currentUser.name : 'Playing with Dev tools?' }
          </div>
          <img
            src={ props.page === 'main' ? logout_light: logout }
            className='nav__logout-img'
            alt='logout'/>
        </button>

        <button
          type="button"
          className={
            `nav__button button-hover  button-hover
            ${ props.isLoggedIn ? 'nav__noDisplay': '' }`
          }
          onClick={ props.openLogin }
        >
          Sign in
        </button>
      </div>

      <div className='nav__mobile-view'>
      <button
        type="button"
        className={
          `nav__menu-button
          ${ props.isNavMenuOpen ? 'nav__close': (props.page === 'savedNews' ? 'nav__open_dark' : 'nav__open') }
          `
        }
        onClick={ () => { props.isNavMenuOpen ? props.onClose() : props.openNavMenu() } }
      >
      </button>

      </div>
    </nav>
  )
}
