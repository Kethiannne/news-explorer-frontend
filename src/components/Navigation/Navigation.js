import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { Link } from 'react-router-dom';
import logout from '../../images/logout.svg';

export default function Navigation (props) {
  const currentUser = React.useContext(CurrentUserContext);

  function renderMarkUp() {
    if (props.isLoggedIn) {
      return (
        <div className='nav'>

        <Link to='/' className='nav__link'>
          Home
        </Link>

        <Link to='/saved-news' className='nav__link'>
          Saved articles
        </Link>

        <button type="button" className="nav__button"
          onClick={ props.handleLogout }>{ currentUser.name }{ logout }</button>

        </div>
      )
    }
    return (
      <div className='nav'>

      <Link to='/' className='nav__link'>
        Home
      </Link>
      <button type="button" className="nav__button" onClick={ props.openLogin }>Sign in</button>

      </div>
    )
  }

  return (
    renderMarkUp()
  )
}
