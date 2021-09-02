import React from 'react';

export default function SignupToolTip (props) {

  return (
    <div className= { `popup popup_InfoToolTip ${ props.isOpen ? `popup_opened` : `` }` }
      onClick={(evt)=>{
        if (evt.target === evt.currentTarget){
          props.onClose()
        }
      }}
    >
      <div className={`popup__wrapper`} >
        <button className="popup__close-button button-hover" type="button"
          aria-label="Close" onClick={ props.onClose }>
        </button>
        <div className='form'>
          <h3 className='form__title'>Registration Successfully Completed!</h3>
          <p className='form__link_tooltip' onClick={() => {
            props.onClose();
            props.openLogin();
            }
          }>
            Sign in
          </p>
        </div>
      </div>
    </div>
  )
}
