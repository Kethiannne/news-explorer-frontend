import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer (props) {
  return (
    <footer className='footer'>

      <p className='footer__copyright'> © 2021 Supersite, Powered by News API </p>

      <div className='footer__nav'>
          <Link
            to='/'
            target="_blank"
            className='footer__link button-hover'
          >
            Home
          </Link>
          <Link
            to='https://practicum.yandex.com'
            target="_blank"
            className='footer__link button-hover'
          >
            Practicum By Yandex
          </Link>
          <div className='footer__socials'>
            <Link
              to='https://github.com/Kethiannne'
              target="_blank"
              className='footer__link_social footer__github button-hover'
            />
            <Link
              to='https://facebook.com/durnvall'
              target="_blank"
              className='footer__link_social footer__facebook button-hover'
            />
          </div>
      </div>
    </footer>
  )
}
