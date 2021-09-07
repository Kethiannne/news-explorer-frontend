import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

export default function SignupPopup (props) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');

  React.useEffect(() => {
    setEmail('');
    setPassword('');
    setName('');
  }, [ props.isOpen ]);

  function handleChange(evt){
    if (evt.target.name === "email") {
      setEmail(evt.target.value);
    } else if (evt.target.name === "password") {
        setPassword(evt.target.value);
      } else if (evt.target.name === "name") {
          setName(evt.target.value);
        }
  }

  function handleSubmit(evt){
    evt.preventDefault();
    props.registerUser(email, password, name);
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
    >
    {/* Children Elements */}
    <p className='form__input-title'>Email</p>
    <input name="email" value={ email || '' } onChange={ handleChange } type="email" required
      className="form__field" placeholder="Enter Email" minLength={ 2 } maxLength={ 200 } />
    <p className='form__error'>Invalid Email Address</p>

    <p className='form__input-title'>Password</p>
    <input name="password" value={ password || '' } onChange={ handleChange } type="password" required
      className="form__field" placeholder="Enter Password" minLength={ 8 } maxLength={ 200 } />
    <p className='form__error'>Invalid Password</p>

    <p className='form__input-title'>Username</p>
    <input name="name" value={ name || '' } onChange={ handleChange } type="text" required
      className="form__field" placeholder="Enter Username" minLength={ 2 } maxLength={ 40 } />
    <p className='form__error'>Invalid Password</p>
    </PopupWithForm>
  )
}
