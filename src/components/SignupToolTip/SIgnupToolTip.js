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
        <h3 className='toolTip__title'>Registration Successfully Completed!</h3>
        <p className='toolTip__link' onCLick={() => {
          props.onCLose();
          props.openLogin();
        }}>Sign in</p>
      </div>
    </div>
  )
}
