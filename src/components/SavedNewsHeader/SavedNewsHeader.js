import React from 'react';
import Header from '../Header/Header';
import CurrentUserContext from '../../contexts/CurrentUserContext';

export default function SavedNewsHeader (props) {
  const currentUser = React.useContext(CurrentUserContext);

  const keywords = () => {
    const keywords = []
    props.newsCards.forEach(article => {
      keywords.push(` ${article.keyword}`)
    });

    // create a counter object on array
    const counter = keywords.reduce(
      (counter, key) => {
        counter[key] = 1 + counter[key] || 1;
        return counter
      }, {});

      // sort counter by values (compare position 1 entries)
      const counted_keywords = Object.entries(counter).sort((a, b) => b[1] - a[1]);

      // show only keys of the sorted array
      const sorted_keywords = counted_keywords.map(x => x[0])

      // cuts off the return after 2 keywords or displays none if there aren't any
      return sorted_keywords.length > 2 ?
      (`${sorted_keywords.slice(0, 2).toString()} and ${sorted_keywords.length - 2} other`) :
      (sorted_keywords.length > 0 ?
      sorted_keywords.toString() :
      ' none')
  }

  console.log(keywords())

  return (
    <div className='saved-news-header'>
      <Header
        isLoggedIn={ props.isLoggedIn }
        page={ props.page }
        openLogin={ props.openLogin }
        handleLogout={ props.handleLogout }
        isNavMenuOpen={ props.isNavMenuOpen }
        openNavMenu={ props.openNavMenu }
      >
      </Header>

      <div className='saved-news-header__about'>
        <p className='saved-news-header__subtitle'>Saved Articles</p>
        <h1 className='saved-news-header__title'>
          { currentUser.name ? currentUser.name : 'How did you get here? ' }, you have {
          props.newsCards.length} saved articles
        </h1>
        <h3 className='saved-news-header__keywords'>
          By keywords:
          <span className='saved-news-header__boldText'>
            {
              keywords()
            }
          </span>
        </h3>

      </div>
    </div>
  )

}
