import React from 'react';
import not_found from '../../images/not_found.png';

export default function NoCards(props) {

  const centerpiece = (
    (props.loading === true && props.results === true) ?
      <i className={`circle-preloader`}></i> :
      <img alt='no cards found' src={not_found} ></img>
  );

  const notFoundTitle = (
    (props.loading === true && props.results === true) ? '' :
    <h3 className='noCards__title'>Nothing found</h3>
  )

  return (
    <div className='noCards__wrapper'>
      {centerpiece}
      {notFoundTitle}
      <p className='noCards__text'>
        {
          props.loading === true && props.results === true ?
          'Searching for news...' :
          (props.didSucceed ?
          'Sorry, but nothing matched your search terms.' :
          'Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later')
        }
      </p>
    </div>
  )
}
