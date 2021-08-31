import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../images/facebook.svg';
import github from '../../images/github.svg';

export default function Footer (props) {
  return (
    <div className='footer'>
      <p className='footer__copyright'> © 2021 Supersite, Powered by News API </p>
      <div className='footer__nav'>
        <Link to='/' className='footer__link'>Home</Link>
        <Link to='https://practicum.yandex.com' className='footer__link button-hover'>Practicum By Yandex</Link>
        <Link to='https://github.com/Kethiannne' className='footer__link_social button-hover'><img src={ github } alt='github logo'></img></Link>
        <Link to='https://facebook.com/durnvall' className='footer__link_social button-hover'><img src={ facebook } alt='facebook logo'></img></Link>
      </div>
    </div>
  )
}
