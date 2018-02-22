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

const Profile = props => (
  <div>
  	<Header user={props.user.user} />
  	{/*image*/}
  
  	<Chat/>
  				
  	<Greeting {...props}/>
  				
  	<Input/>
  	{/*image*/}
  								
  	<Wins_Losses/>
  								
  	<Footer/>
  									
  </div>

  );

  export default Profile;
