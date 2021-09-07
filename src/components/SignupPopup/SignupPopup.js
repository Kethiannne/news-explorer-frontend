import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
export default function SignupPopup (props) {

  const [state, setState] =React.useState({
    email: '',
    password: '',
    userName: '',
    emailError: '',
    passwordError: '',
    userNameError: '',
    emailValid: false,
    passwordValid: false,
    userNameValid: false,
    formValid: false
  })

  React.useEffect(() => {
    setState({
      email: '',
      password: '',
      userName: '',
      emailError: '',
      passwordError: '',
      userNameError: '',
      emailValid: false,
      passwordValid: false,
      userNameValid: false,
      formValid: false
    })
  }, [ props.isOpen ]);

  // Effect that updates formValid whenever the other validity state keys change
  React.useEffect(()=>{

    setState({formValid: state.emailValid && state.passwordValid && state.userNameValid, ...state});

  }, [state.emailValid, state.passwordValid, state.userNameValid])



  function validateField(input, value) {
    let emailError = state.emailError;
    let passwordError = state.passwordError;
    let userNameError = state.userNameError;
    let emailValid = state.emailValid;
    let passwordValid = state.passwordValid;
    let userNameValid = state.userNameValid;
    switch(input) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) && value.length >= 2 && value.length <= 200;
        emailError = emailValid ? '' : ' is invalid';
        break;
      case 'password':
        passwordValid = value.length >= 6 && value.length <= 200;
        passwordError = passwordValid ? '': ' is too short';
        break;
      case 'userName':
        userNameValid = value.length >= 2 && value.length <= 40;
        userNameError = userNameValid ? '': ' is too short';
      break;
      default:
        break;
    }
    setState({
      emailError: emailError,
      passwordError: passwordError,
      userNameError: userNameError,
      emailValid: emailValid,
      passwordValid: passwordValid,
      userNameValid: userNameValid,
    });
  }


  function handleUserInput (evt) {
    const name = evt.target.name;
    const value = evt.target.value;
    setState({[name]: value});
    validateField(name, value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    props.registerUser(state.email, state.password, state.userName);
  }

  function formError(input, error) {
    console.log(input, error ?
      input + ' ' + error :
      '')
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
      formValid={ state.formValid }
    >
    {/* Children Elements */}
    <p className='form__input-title'>Email</p>
    <input name='email' value={ state.email } onChange={ handleUserInput } type='email' required
      className='form__field' placeholder='Enter Email' minLength={ 2 } maxLength={ 200 } />

    <p className='form__input-title form__error'> {formError('Email', state.emailError)} </p>

    <p className='form__input-title'>Password</p>
    <input name='password' value={ state.password } onChange={ handleUserInput } type='password' required
      className='form__field' placeholder='Enter Password' minLength={ 8 } maxLength={ 200 } />

    <p className='form__input-title form__error'> {formError('Password', state.passwordError)} </p>


    <p className='form__input-title'>Username</p>
    <input name='userName' value={ state.userName } onChange={ handleUserInput } type='text' required
      className='form__field' placeholder='Enter Username' minLength={ 2 } maxLength={ 40 } />

    <p className='form__input-title form__error'> {formError('Username', state.userNameError)} </p>


    </PopupWithForm>
  )
}
