import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selectors';

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     currentUser: null
  //       };
  // }

  unsubscribeFromAuth = null;

  componentDidMount(){
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
              setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });
          });
      }
     // setCurrentUser({currentUser: userAuth});
        setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return ( 
      <div>
        <Header />
        <Switch> 
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />

          <Route 
            exact path='/signin' 
            render={()=>
              this.props.currentUser ? (
                <Redirect to='/'/>
              ) : (
                <SignInAndSignUpPage />
              )
              } 
            />
  
        </Switch>
      </div>  

  );
 }
}

// const mapStateToProps = ({user}) => ({
//   currentUser: user.currentUser
// })
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))//dispatch is a way 4 redux to know that whatever object i am passing is going to be an action object that will be passed to every reducer
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
      ) (App);//connect our app to the outcome of the initial connect call using the 2nd arg of connect mapDispatchToProps
