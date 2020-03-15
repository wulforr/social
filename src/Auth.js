import  { Component } from 'react'
import { createBrowserHistory } from 'history';
import auth0 from 'auth0-js'

const history = createBrowserHistory();

export default class Auth extends Component {
    auth0 = new auth0.WebAuth({
        domain: 'wulfor.auth0.com',
        clientID: 'Qhwijdtyrb66COicj4S94yqxBxvmSV1y',
        redirectUri: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' : 'https://appbaseio-apps.github.io/reactivesearch-auth0-example/callback',
        audience: 'https://wulfor.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
      });
    
      login = () => {
        this.auth0.authorize();
      }
    
      // parses the result after authentication from URL hash
      handleAuthentication = () => {
        this.auth0.parseHash((err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            this.setSession(authResult);
            console.log(authResult)
            history.replace('/app');
          } else if (err) {
            history.replace('/app');
            console.log(err);
          }
        });
      }
    
      // Sets user details in localStorage
      setSession = (authResult) => {
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        // navigate to the home route
        history.replace('/app');
      }
    
      // removes user details from localStorage
      logout = () => {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the home route
        history.replace('/app');
      }
    
      // checks if the user is authenticated
      isAuthenticated = () => {
        // Check whether the current time is past the
        // access token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
      }
}
