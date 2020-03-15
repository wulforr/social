import React, { Component } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import App from './App'
import Login from './Login'
import Signup from './Signup'
import Navbar from './Navbar'
import Post from './Post'

// const auth = new Auth();


// const handleAuthentication = (nextState, replace) => {
//     if (/access_token|id_token|error/.test(nextState.location.hash)) {
//       auth.handleAuthentication();
//     }
//   }
  

export default class Router extends Component {
    render() {
        // console.log(auth.isAuthenticated)/
        
        return (
            <div className="container">
                <Navbar />
                <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={(props) => <App  {...props} />} />
                    <Route exact path="/post" render={(props) => <Post  {...props} />} />
                    <Route exact path="/app" render={(props) => <App  {...props} />} />
                    <Route exact path="/login" render={(props) => <Login  {...props} />} />
                    <Route exact path="/signup" render={(props) => <Signup  {...props} />} />
                    {/* <Route path="/callback" render={(props) => {
                        handleAuthentication(props);
                        return <Callback {...props} />
                    }}/> */}
                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}
