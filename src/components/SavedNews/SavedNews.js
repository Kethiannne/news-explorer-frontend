import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import NewsCardsList from '../NewsCardsList/NewsCardList'

export default function SavedNews (props) {

  return (
    <main>
    <SavedNewsHeader
      isLoggedIn={ props.isLoggedIn }
    />
    <NewsCardsList
    />
    </main>
  )
}
