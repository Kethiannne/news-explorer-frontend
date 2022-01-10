import React from 'react';

export default function PopupWithForm (props) {

  React.useEffect(() => {
    const close = (evt) => {
      if(evt.keyCode === 27){
        props.onClose()
      }
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  },[])

  return (
    <div className= {`popup popup_${props.name} ${props.isOpen ? `popup_opened` : ``}`}
      onClick={(evt)=>{
        if (evt.target === evt.currentTarget){
          props.onClose();
        }
      }}
    >
      <div className={`popup__wrapper`} >
        <button className='popup__close-button button-hover' type='button'
          aria-label='Close' onClick={props.onClose}>
        </button>
        <form className='form' name={props.name} onSubmit={props.onSubmit}>
          <h2 className='form__title'>
            {props.title}
          </h2>

          {props.children}

          <p className='form__input-title form__error_save'>
            {
              props.didSucceed ?
              '' :
              (props.title === 'Sign up' ?
              'The requested username or email is not available' :
              'The provided email or password is incorrect'
              )
            }
          </p>

          <button type='submit' className={`form__save-button  ${props.formValid === true ? `button-hover` : `form__save-button_disabled`}`} >
            {props.saveText}
          </button>
          <p className='form__text'> or
            <span className='form__link' onClick={() => {
              props.onClose();
              props.openForm();
            }}>
              { props.linkText }
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}
