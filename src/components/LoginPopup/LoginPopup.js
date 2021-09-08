import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function LoginPopup (props) {
  const [email, setEmail] =React.useState('');
  const [password, setPassword] =React.useState('');
  const [emailError, setEmailError] =React.useState('');
  const [passwordError, setPasswordError] =React.useState('');
  const [emailValid, setEmailValid] =React.useState(false);
  const [passwordValid, setPasswordValid] =React.useState(false);
  const [formValid, setFormValid] =React.useState(false);

  // Resets to standard values on close
  React.useEffect(() => {
    setEmail('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
    setEmailValid(false);
    setPasswordValid(false);
    setFormValid(false);
  }, [ props.isOpen ]);

  // Effect that updates formValid whenever the other validity state keys change
  React.useEffect(()=>{

    setFormValid(emailValid && passwordValid)

  }, [emailValid, passwordValid])



  function validateField(input, value) {
    let eError = emailError;
    let pError = passwordError;
    let eValid = emailValid;
    let pValid = passwordValid;

    switch(input) {
      case 'email':
        eValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && value.length >= 2;
        eError = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        pValid = value.length > 7;
        pError = passwordValid ? '': ' is too short';
      break;
      default:
        break;
    }
    setEmailError(eError);
    setPasswordError(pError);
    setEmailValid(eValid);
    setPasswordValid(pValid);
  }


  function handleUserInput (evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    switch(name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
      break;
      default:
        break;
    }

    validateField(name, value);
  }

  function handleSubmit(evt){
    evt.preventDefault();
    props.login(email, password);
  }

  function formError(input, error) {
    return (
        error ?
        input + ' ' + error :
        ''
    )
  }

  return (
    <PopupWithForm
    // Props
      name='login-form'
      title='Sign in'
      saveText='Sign in'
      isOpen={ props.isOpen }
      onClose={ props.onClose }
      onSubmit={ handleSubmit }
      openForm={ props.openSignup }
      linkText=' Sign up'
      formValid={ formValid }
    >
    {/* Children Elements */}
    <p className='form__input-title'>Email</p>
    <input name='email' value={ email } onChange={ handleUserInput } type='email' required
      className='form__field' placeholder='Enter Email' minLength={ 2 } maxLength={ 200 } />

    <p className='form__input-title form__error'> {formError('Email', emailError)} </p>

    <p className='form__input-title'>Password</p>
    <input name='password' value={ password } onChange={ handleUserInput } type='password' required
      className='form__field' placeholder='Enter Password' minLength={ 8 } maxLength={ 200 } />

    <p className='form__input-title form__error'> {formError('Password', passwordError)} </p>
    </PopupWithForm>
  )
}
