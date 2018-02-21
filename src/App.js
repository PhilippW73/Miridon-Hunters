import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import Home from "./pages/Home";
//import Battle from "./pages/battle";
import Character_Creation from "./pages/Character_Creation";
import Character_Selection from "./pages/Character_Selection";
import Profile from "./pages/Profile";
import Upgrade_and_Shop from "./pages/Upgrade_and_Shop";
import SignupForm from "./pages/SignupForm";
// import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm"; 
//import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";

// import Greeting from "./components/Greeting";
// import Wins_Losses from "./components/Wins_Losses";
// import Chat from "./components/Chat";
// import Column from "./components/Column";
// import Header from "./components/Header";
// import Image from "./components/Image";
// import Input from "./components/Input";
// import Profile_Main from "./components/Profile_Main";
// import Row from "./components/Row";
// import Store_Exchange from "./components/Store_Exchange";
// import DisplayLinks from "./components/DisplayLinks";


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      user: null
    }
    this._logout = this._logout.bind(this)
    this._login = this._login.bind(this)
  }
  
  componentDidMount() {
    console.log('component mounted');
    axios.get("/auth/user").then( res =>{
      if(res.data.user){
        this.setState({
          loggedIn: true,
          user: res.data.user
        });
      }else{
        this.setState({
          loggedIn: false,
          user: null
        });
      }
    })
  }

  _logout(event) {
    event.preventDefault()
    console.log('logging out')
    axios.post('/auth/logout').then(response => {
      console.log(response.data)
      if (response.status === 200) {
        this.setState({
          loggedIn: false,
          user: null
        })
      }
    })
  }

  _login(username, password, email) {
    // axios
    //   .post('/auth/login', {
    //     username,
    //     password,
    //     email
    //   })
    //   .then(response => {
    //     console.log(response)
    //     if (response.status === 200) {
    //       // update the state
    //       this.setState({
    //         loggedIn: true,
    //         user: response.data.user
    //       })
    //     }
    //   })
    axios.get('/auth/user')
      .then(response => {
        if (response.data.user) {
          console.log('THERE IS A USER: ', response);
          this.setState({
            loggedIn: true,
            user: response.data.user
          }, () => console.log('User Logged In: ', this.state));
        } else {
          this.setState({
            loggedIn: false,
            user: null
          }, () => console.log('User Not Logged In: ', this.state));
        }
      })
      .catch(err => console.log('Error: ', err));
  }


  render () {
    return (
      <Router>
          <div>
            {/*<Navbar/> */}
            <Wrapper>
              <Route exact path="/" component={Home} />
              <Route exact path="/Home" component={Home} />
              {/*<Route exact path="/Battle" component={Battle} />*/}
              <Route exact path="/Character_Creation" component={Character_Creation} />
              <Route exact path="/Character_Selection" component={Character_Selection} />
              <Route exact path="/Character_Creation" component={Character_Creation} />
              <Route exact path="/Profile" render={(props) => <Profile user={this.state} /> } />
              <Route exact path="/Upgrade_and_Shop" component={Upgrade_and_Shop} />
              <Route exact path="/signup" component={SignupForm} />
              <Route exact path="/" render={() => <Home user={this.state.user} />} />
              <Route
                exact
                path="/login"
                render={() =>
                  <LoginForm
                    _login={this._login}
                  />}
              />
            </Wrapper>
            
          </div>
        </Router>
      );
  }
  
}

export default App;
