// React Imports
import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

// Utility Imports
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute';
import { authorize, checkToken, register } from '../../utils/auth';
import { defaultCardList } from '../../utils/constants'

// Main Page Imports
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';

// Popup Imports
import LoginPopup from '../LoginPopup/LoginPopup';
import SignupPopup from '../SignupPopup/SignupPopup';
import SignupToolTip from '../SignupToolTip/SIgnupToolTip';
import NavMenu from '../NavMenu/NavMenu'

// Footer Import
import Footer from '../Footer/Footer';


// Apis
import MainApi from '../../utils/mainApi'
import NewsApi from '../../utils/newsApi';


function App(props) {
  // A Section For States
  //-----------------------------------------------------------------
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [jwt, setJwt] = React.useState('');
    const [doneChecking, setDoneChecking] = React.useState(false);
    const [currentUser, setCurrentUser] = React.useState({});

    const [isLoginOpen, setIsLoginOpen] = React.useState(false);
    const [isSignupOpen, setIsSignupOpen] = React.useState(false);
    const [isToolTipOpen, setIsToolTipOpen] = React.useState(false);
    const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false);

    const [searched, setSearched] = React.useState(false);
    const [keyword, setKeyword] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [results, setResults] = React.useState(true);
    const [newsCards, setNewsCards] = React.useState([]);
    const [userArticles, setUserArticles] = React.useState([]);

    const history = props.history;
  //-----------------------------------------------------------------

  // A Section for Opening and Closing Popups
  //-----------------------------------------------------------------
    function closeAllPopups(){
      setIsLoginOpen(false);
      setIsSignupOpen(false);
      setIsToolTipOpen(false);
      setIsNavMenuOpen(false);
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

    function handleNavMenuOpen() {
      setIsNavMenuOpen(true);
    }
  //-----------------------------------------------------------------

    // A Section for API Calls
  //-----------------------------------------------------------------

  // A Call for Checking User Token
    React.useEffect(()=> {
      if (localStorage.getItem('jwt')) {
        const token = localStorage.getItem('jwt');
        setJwt(token);
        checkToken(token)
          .then(data => {
            setLoggedIn(true);
          })
          .then(()=>{
            setDoneChecking(true);
          })
          .catch(err => {
            setDoneChecking(true);

            console.log((`jwt checker broken: ${ err }`))
          })
      } else {
        console.log('no jwt found');
        setDoneChecking(true);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedIn])

  // A Call For Logging a User in
    function loginAuthorize(email, password) {
      authorize(email, password)
        .then(() => {
          setLoggedIn(true);
          closeAllPopups();
        })
        .catch(err => {
          setLoggedIn(false)
          console.log((`Login Function Broken: ${ err }`))
        })
    }

  // A Call for Registering the user
    function registerUser(email, password, name) {
      register(email, password, name)
        .then((res)=>{
          closeAllPopups();
          handleToolTipOpen();
        })
        .catch(err => {

          // rekerjig this to make sure the proper error message is displayed in the form?
          console.log(err);
          console.log((`Register Function Broken: ${ err }`))
        })
    }

  // A Call for Initial User Info
    React.useEffect(()=>{
      MainApi.getUserInfo(jwt)
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
        console.log('logging out')
      }

    // Searching for News
      function searchSubmit(query) {
        setSearched(true);
        setLoading(true);
        setResults(true);
        setKeyword(query);

        NewsApi.getArticles(query)
          .then((res) => {
            if(res.articles.length === 0) { setResults(false) }
            setLoading(false);
            setNewsCards(res.articles);
          })
          .catch((err) => {
            setResults(false);
            setLoading(false);
            console.log((`Card Search Function Broken: ${ err }`))
          })
      }

    // A Call for Initial Cards
      React.useEffect(() => {
        MainApi.getUserArticles(jwt)
          .then((res) => {
            setUserArticles(res.checkedArticles);
          })
          .catch(err => {
            console.log((`Articles could not be delivered as dialed: ${ err }`))
          })
      }, [jwt])

    // Saving and Deleting News Cards
    function newsCardDelete(id) {
      MainApi.deleteArticle(jwt, id)
      .then(() => {
        setUserArticles((cards) => cards.filter(card => card._id !== id))
      })
      .catch(err => {
        console.log((`Article Refuses to Leave Peacefully: ${ err }`))
      })
    }

    function newsCardSave(obj) {
      MainApi.createArticle(jwt, obj)
      .then((res)=>{
        articleIdSetter(res.article._id);
      })
      .catch(err=>{
        console.log('Article Save Method Broken',err)
      })
    }

    function articleIdSetter(id) {
      console.log(id, 'setter')
    }

   if (!doneChecking) {return <div></div>}
  return (
    <CurrentUserContext.Provider value={ currentUser }>
      <div className="page__wrapper">
        {/* Switch below handles Routing Direction */}
        <Switch>
          {/* Main Page */}
          <Route exact path='/'>
            <Main
              isLoggedIn={ loggedIn }
              isNavMenuOpen={ isNavMenuOpen }
              openNavMenu={ handleNavMenuOpen }
              searchSubmit={ searchSubmit }
              openLogin={ handleLoginOpen }
              handleLogout={ handleLogout }
              searched={ searched }
              loading={ loading }
              results={ results }
              newsCards={ newsCards }
              keyword={ keyword }
              newsCardSave={ newsCardSave }
            />
          </Route>

          {/* User Saved Articles */}
          <ProtectedRoute path='/saved-news'
            component={ SavedNews }
            isLoggedIn={ loggedIn }
            isNavMenuOpen={ isNavMenuOpen }
            openLogin={ handleLoginOpen }
            openNavMenu={ handleNavMenuOpen }
            handleLogout={ handleLogout }
            loading={ loading }
            results={ results }
            newsCards={ userArticles }
            keyword={ keyword }
            newsCardDelete={ newsCardDelete }
          />

          {/* Global Redirect */}
          <Route path='/*'>
            <Redirect to='/' />
          </Route>

        </Switch>

        {/* Components to be Available Regardless of Route */}
        <Footer />
        <NavMenu
          openLogin={ handleLoginOpen }
          onClose={ closeAllPopups }
          isNavMenuOpen={ isNavMenuOpen }
        >

        </NavMenu>
        <SignupPopup
          onClose={ closeAllPopups }
          isOpen={ isSignupOpen }
          registerUser={ registerUser }
          openLogin={ handleLoginOpen }
        />
        <SignupToolTip
          onClose={ closeAllPopups }
          openLogin={ handleLoginOpen }
          isOpen={ isToolTipOpen }
        />
        <LoginPopup
          onClose={ closeAllPopups }
          isOpen={ isLoginOpen }
          setLoggedIn={ setLoggedIn }
          login={ loginAuthorize }
          openSignup={ handleSignupOpen }
        />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
