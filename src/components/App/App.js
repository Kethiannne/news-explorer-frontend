// React Imports
import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

// Utility Imports
import api from '../../utils/api';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute';
import { authorize, checkToken, register } from '../../utils/auth';

// Main Page Imports
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';

// Popup Imports
import LoginPopup from '../LoginPopup/LoginPopup';
import SignupPopup from '../SignupPopup/SignupPopup';
import SignupToolTip from '../SignupToolTip/SIgnupToolTip'

// Footer Import
import Footer from '../Footer/Footer';

// Preloader
// impolement preloader import here


function App(props) {
  // A Section For States
  //-----------------------------------------------------------------
    const [loggedIn, setLoggedIn] = React.useState(false)
    const [jwt, setJwt] = React.useState('');
    const [doneChecking, setDoneChecking] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({});

    const [isLoginOpen, setIsLoginOpen] = React.useState(false);
    const [isSignupOpen, setIsSignupOpen] = React.useState(false);
    const [isToolTipOpen, setIsToolTipOpen] = React.useState(false);

    const history = props.history;
  //-----------------------------------------------------------------

  // A Section for Opening and Closing Popups
  //-----------------------------------------------------------------
    function closeAllPopups(){
      setIsLoginOpen(false);
      setIsSignupOpen(false);
      setIsToolTipOpen(false);
    }

    function handleLoginOpen() {
      setIsLoginOpen(true);
    }

    function handleSignupOpen() {
      setIsSignupOpen(true);
    }

    function handleToolTipOpen() {
      setIsToolTipOpen(true);
    }
  //-----------------------------------------------------------------

    // A Section for API Calls
  //-----------------------------------------------------------------

  // A Call for Checking User Token
    // React.useEffect(()=> {
    //   if (localStorage.getItem('jwt')) {
    //     const token = localStorage.getItem('jwt');
    //     setJwt(token);
    //     checkToken(token)
    //       .then(data => {
    //         setLoggedIn(true);
    //         history.push('/');
    //       })
    //       .then(()=>{
    //         setDoneChecking(true);
    //       })
    //       .catch(err => {
    //         console.log((`jwt checker broken: ${ err }`))
    //       })
    //   } else {
    //     console.log('no jwt found');
    //     setDoneChecking(true);
    //   }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [loggedIn])

  // A Call For Logging a User in
    function loginAuthorize(email, password) {
      authorize(email, password)
        .then(() => {
          setLoggedIn(true);
        })
        .then(() => {
          history.push('/');
        })
        .catch(err => {
          setLoggedIn(false)
          console.log((`Login Function Broken: ${ err }`))
        })
    }

  // A Call for Registering the user
    function registerUser(email, password, name) {
      register(email, password, name)
        .then(()=>{
          handleToolTipOpen();
        })
        .catch(err => {

          // rekerjig this to make sure the proper error message is displayed in the form?

          console.log((`Register Function Broken: ${ err }`))
        })
    }

  // A Call for Initial User Info
    React.useEffect(()=>{
      api.getUserInfo(jwt)
        .then((res) => {
          setCurrentUser(res);
        })
        .catch(err => {
          console.log((`User info not received properly: ${ err }`));
        })
    }, [jwt])

    //Logging a User Out
      function handleLogout(){
        setLoggedIn(false);
        setJwt('');
        localStorage.removeItem('jwt');
      }

    // Searching for News
      function searchSubmit(keyword) {
        // this will search for news
      }

  // if (!doneChecking) {return <div></div>}
  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <div className="page__wrapper">
        {/* Switch below handles Routing Direction */}
        <Switch>
          {/* Main Page */}
          <Route exact path='/'>
            <Main
              isLoggedIn={ loggedIn }
              searchSubmit={ searchSubmit }
              handleLogout={ handleLogout }
              openLogin={ handleLoginOpen }
            />
          </Route>

          {/* User Saved Articles */}
          <ProtectedRoute path='/saved-news'
            component={ SavedNews }
            isLoggedIn={ loggedIn }
          />

          {/* Global Redirect */}
          <Route path='/*'>
            <Redirect to='/' />
          </Route>

        </Switch>

        {/* Components to be Available Regarless of Route */}
        <Footer />
        <SignupPopup
          onClose={ closeAllPopups }
          isOpen={ isSignupOpen }
          registerUser={ registerUser }
        />
        <SignupToolTip
          onClose={ closeAllPopups }
          isOpen={ isLoginOpen }
          openLogin={ handleLoginOpen }
        />
        <LoginPopup
          onClose={ closeAllPopups }
          isOpen={ isToolTipOpen }
          setLoggedIn={ setLoggedIn }
          login={ loginAuthorize }
          openSignup={ handleSignupOpen }
        />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
