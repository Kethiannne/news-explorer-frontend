import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function LoginPopup (props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    setEmail('');
    setPassword('');
  }, [ props.isOpen ]);

  function handleChange(evt){
    evt.target.name === "email" ? setEmail(evt.target.value) : setPassword(evt.target.value);
  }

  function handleSubmit(evt){
    evt.preventDefault();
    props.login(email, password);
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
      linkText='Sign up'
    >
    {/* Children Elements */}
    <input name="email" value={ email } onChange={ handleChange } type="email" required
      className="form__field" placeholder="Email" minLength={ 2 } maxLength={ 200 } />

    <input name="password" value={ password } onChange={ handleChange } type="password" required
      className="form__field" placeholder="Password" minLength={ 8 } maxLength={ 200 } />
    </PopupWithForm>
  )
}
