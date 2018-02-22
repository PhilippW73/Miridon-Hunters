import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Greeting from "../components/Greeting";
import Wins_Losses from "../components/Wins_Losses";
import API from "../utils/user/API";
import FormBtn from "../components/FormBtn";

class Profile extends Component {
  state = {
    local: {
      username: "",
      password: "",
      email: ""
    },
    bio: "",
    img:""
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
      API.getUser()
        .then(res =>
          this.setState({ bio: res.data})
        )
        .catch(err => console.log(err));
  };

  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
  };

  // handleFormSubmitPassword = event => {
  //     event.preventDefault();
  //     if (this.state.local.password) {
  //       API.updateUser({
  //         local.password: this.state.local.password,
  //       })
  //         .then(res => this.loadUser())
  //         .catch(err => console.log(err));
  //     }
  // };

  handleFormSubmitBio = event => {
      event.preventDefault();
      if (this.state.bio) {
        API.updateUser({
          bio: this.state.title,
        })
          .then(res => this.loadUser())
          .catch(err => console.log(err));
      }
  };

  render() {
    return (
      <div>
      	<Header user={this.props.user.user} />
      	<Chat/>
      	<Greeting {...this.props}/>
      				
      	{/*<Input/>
        value={this.state.local.password}
        onChange={this.handleInputChange}
        name="password"
        placeholder="Password (required)"
        />

        <FormBtn
          disabled={!(this.state.local.password)}
          onClick={this.handleFormSubmitPassword}>
          Update Password
        </FormBtn> */}

        <Input/>
        value={this.state.bio}
        onChange={this.handleInputChange}
        name="bio"
        placeholder="Bio"
        />

        <FormBtn
          disabled={!(this.state.local.bio)}
          onClick={this.handleFormSubmitBio}>
          Update Bio
        </FormBtn>

      	<Image/>
      								
      	<Wins_Losses/>
      								
      	<Footer/>
      									
      </div>

    );
  }
}

  export default Profile;
