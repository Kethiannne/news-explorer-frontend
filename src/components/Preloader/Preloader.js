import React from 'react';

export default function Preloader(props) {
  return (
    <div className='preloader__wrapper'>
      <i className="circle-preloader"></i>
      <p className='preloader__text'>Searching for news...</p>
    </div>
  )
}
