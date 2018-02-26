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
      email: ""
    },
    bio: ""
  };

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
      API.getUser()
        .then(res =>
          this.setState({bio: res.data})

        )
        //console.log(res)
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
          bio: this.state.bio
        })
          .then(res => this.loadUser())
          .catch(err => console.log(err));
      }
      console.log(this.state.bio);
  };

  

  render() {
    return (
      <div>
      	<Header user={this.props.user.user} />
      	<Chat/>
      	<Greeting {...this.props}/>
      				
        <h2> Bio </h2>
        <Input
        value={this.state.bio}
        onChange={this.handleInputChange}
        name="bio"
        placeholder="Bio"
        />

        <FormBtn
          onClick={this.handleFormSubmitBio}>
          Update Bio
        </FormBtn>
        <h2> Image </h2>
      	<Image/>
      								
      	<Wins_Losses/>
      								
      	<Footer/>
      									
      </div>

    );
  }
}

  export default Profile;
