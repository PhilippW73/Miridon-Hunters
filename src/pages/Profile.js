import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Row from "../components/Row";
import Column from "../components/Colmun";
import Greeting from "../components/Greeting";
import Wins_Losses from "../components/Wins_Losses";

const Profile = () =>
  <div>
  	
  	<Header/>
  	{/*image*/}
  		
  	<Chat/>
  				
  	<Greeting/>
  				
  	<Input/>
  	{/*image*/}
  								
  	<Wins_Losses/>
  								
  	<Footer/>
  									
  		
  </div>;

  export default Profile;
