import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
export default function SignupPopup (props) {

  const [email, setEmail] =React.useState('');
  const [password, setPassword] =React.useState('');
  const [userName, setUsername] =React.useState('');
  const [emailError, setEmailError] =React.useState('');
  const [passwordError, setPasswordError] =React.useState('');
  const [userNameError, setUsernameError] =React.useState('');
  const [emailValid, setEmailValid] =React.useState(false);
  const [passwordValid, setPasswordValid] =React.useState(false);
  const [userNameValid, setUsernameValid] =React.useState('');
  const [formValid, setFormValid] =React.useState(false);

  // Resets to standard values on close
  React.useEffect(() => {
    setEmail('');
    setPassword('');
    setUsername('');
    setEmailError('');
    setPasswordError('');
    setUsernameError('');
    setEmailValid(false);
    setPasswordValid(false);
    setUsernameValid(false);
    setFormValid(false);
  }, [ props.isOpen ]);

  // Effect that updates formValid whenever the other validity state keys change
  React.useEffect(()=>{

    setFormValid(emailValid && passwordValid && userNameValid);

  }, [emailValid, passwordValid, userNameValid])



  function validateField(input, value) {
    let eError = emailError;
    let pError = passwordError;
    let uError = userNameError;
    let eValid = emailValid;
    let pValid = passwordValid;
    let uValid = userNameValid;
    switch(input) {
      case 'email':
        eValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && value.length >= 2;
        eError = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        pValid = value.length >= 6;
        pError = passwordValid ? '': ' is too short';
        break;
      case 'userName':
        uValid = value.length >= 2;
        uError = userNameValid ? '': ' is too short';
      break;
      default:
        break;
    }

    setEmailError(eError);
    setPasswordError(pError);
    setUsernameError(uError);
    setEmailValid(eValid);
    setPasswordValid(pValid);
    setUsernameValid(uValid);
  }


  function handleUserInput (evt) {
    const name = evt.target.name;
    const value = evt.target.value;

    switch(name) {
      case 'email':
        setEmail(value)
        break;
      case 'password':
        setPassword(value)
        break;
      case 'userName':
        setUsername(value)
      break;
      default:
        break;
    }

    validateField(name, value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.registerUser(email, password, userName);
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
      name='registration-form'
      title='Sign up'
      saveText='Sign up'
      isOpen={ props.isOpen }
      onClose={ props.onClose }
      onSubmit={ handleSubmit }
      openForm={ props.openLogin }
      linkText=' Sign in'
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
    <p className='form__input-title'>Username</p>
    <input name='userName' value={ userName } onChange={ handleUserInput } type='text' required
      className='form__field' placeholder='Enter Username' minLength={ 2 } maxLength={ 40 } />
    <p className='form__input-title form__error'> {formError('Username', userNameError)} </p>
    </PopupWithForm>
  )
}
