import React, { Component } from 'react'
import './App.css';
import Post from './Post'
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const firebaseAppAuth = firebaseApp.auth();

// const providers = {
//   googleProvider: new firebase.auth.GoogleAuthProvider(),
// };

class App extends Component {
  constructor(){
    super();
    this.state={
      user:undefined
    }
  }
  componentDidMount(){
    this.user = localStorage.getItem("user");
    console.log(this.user)
    this.setState({
      user:this.user
    })
  }
  render() {
    console.log(this.user)
    return (
      <div className="App">
      {/* <Navbar auth = {this.props.auth} {...this.props}/> */}
      {this.user ? <Post />:<div>Loading</div>}
    </div>
    )
  }
}


// export default withFirebaseAuth({
//   providers,
//   firebaseAppAuth,
// })(App);

export default App;