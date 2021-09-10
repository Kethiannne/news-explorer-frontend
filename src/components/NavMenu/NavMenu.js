import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

export default function NavMenu (props) {
  return (
    <div className={` popup ${props.isNavMenuOpen ? `popup_opened` : ``}`}
      onClick={(evt)=>{
        if (evt.target === evt.currentTarget){
          props.onClose();
        }
      }}
    >
      <div className='nav-menu'>
        <Header
          onClose={ props.onClose }
          isNavMenuOpen={ props.isNavMenuOpen }
        >
        </Header>

        <Link to='/' className='nav-menu__link'>
          Home
        </Link>
        <Link to='/saved-news' className='nav-menu__link'>
          Saved Articles
        </Link>
        <button type='button' className='nav-menu__button' onClick={ props.openLogin }>
          Sign in
        </button>
      </div>
    </div>
  )
}
