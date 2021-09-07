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
        <button className="popup__close-button button-hover" type="button"
          aria-label="Close" onClick={props.onClose}>
        </button>
        <form className="form" name={props.name} onSubmit={props.onSubmit}>
          <h2 className="form__title">
            {props.title}
          </h2>

          {props.children}

          {/* form error to be given more purpose with validation */}
          <p className='form__error_save'>This username is not available</p>
          <button type="submit" className="form__save-button button-hover">
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
