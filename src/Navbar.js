import React, { Component } from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

// console.log(firebaseAppAuth.currentUser)

  

class Navbar extends Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              localStorage.setItem('user',user.displayName)
            } else {
              // No user is signed in.
              localStorage.removeItem('user')
            }
          });
        
    }
    

    render() {
        // console.log(this.props)

        const {
            user,
            signOut,
            signInWithGoogle,
          } = this.props;
        // console.log(this.props)
        // const {isAuthenticated} = this.props.auth
        // console.log(this.props.auth,isAuthenticated())
        return (
            <div className="navbar">
                <div className="nav-left">
                    Social App
                </div>
                {/* <div className="nav-right" onClick={this.props.user?this.props.signInWithGoogle:this.props.signOut}>
        {!this.props.user?"login/Signup":"logout"} */}

                <div>
                {!user? <div onClick={signInWithGoogle}>login/signup</div> : 
                <span onClick={signOut}>Signout</span>}
                {user? <span>{user.displayName}</span>:""}
                </div>
                    {/* <a href= "#" >Signup</a> */}
                {/* </div> */}  
            </div>
        )
    }
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(Navbar);