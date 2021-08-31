import React from 'react';

export default function Main (props) {
  const [keyword, setKeyword] = React.useState('');

  function handleChange(evt){
    setKeyword(evt.target.value);
  }

  return (
    <div className='searchForm'>
      <h1 className='searchForm__title'>
        What's going on in the world?
      </h1>

      <p className='searchForm__caption'>
        Find the latest news on any topic and save them in your personal account.
      </p>

      <form className='searchForm__form' name='search-form' onSubmit={ props.onSubmit }>
        <input name="keyword" value={ keyword } onChange={ handleChange } type="text" required
        className="searchForm__field" placeholder="Enter topic" minLength={ 2 } maxLength={ 40 } />

        <button type="submit" className="searchForm__button">Search</button>
      </form>
    </div>
  )
}
