import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

export default function NavigationMobile (props) {
  return (
    <div className={` popup ${props.isNavMenuOpen ? `popup_opened` : ``}`}
      onClick={(evt)=>{
        if (evt.target === evt.currentTarget){
          props.onClose();
        }
      }}
    >
      <div className='navMenu'>
        <Header
          onClose={ props.onClose }
          isNavMenuOpen={ props.isNavMenuOpen }
        >
        </Header>

        <Link to='/' className='navMenu__link'>
          Home
        </Link>
        <Link to='/saved-news' className='navMenu__link'>
          Saved Articles
        </Link>
        <button type='button' className='navMenu__button' onClick={ props.openLogin }>
          Sign in
        </button>
      </div>
    </div>
  )
}
