import React from 'react';

export default function SearchForm (props) {
  const [keyword, setKeyword] = React.useState('');

  function handleChange(evt){
    setKeyword(evt.target.value);
  }

  return (
    <div className='search-form'>
      <h1 className='search-form__title'>
        What's going on in the world?
      </h1>

      <p className='search-form__subtitle'>
        Find the latest news on any topic and save them in your personal account.
      </p>

      <form className='search-form__form' name='search-form' onSubmit={ props.onSubmit }>
        <input name="keyword" value={ keyword } onChange={ handleChange } type="text" required
        className="search-form__field" placeholder="Enter topic" minLength={ 2 } maxLength={ 40 } />

        <button type="submit" className="search-form__button">Search</button>
      </form>
    </div>
  )
}
