import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
//import './App.css'
//import LoginForm from '../components/LoginForm'
//import SignupForm from '../components/SignupForm'
import Header from '../components/Header'
import HomeComp from '../components/HomeComp'
import DisplayLinks from '../components/DisplayLinks'
import {Launcher} from '../components/Chat2'
import Menu  from '../components/Navbar/menus/pushRotate'
import Image from '../components/Image'
import { Well, Button, Jumbotron } from 'react-bootstrap';
// https://react-bootstrap.github.io/components/buttons/

const Home = props => (
    <div>
		<Launcher
			agentProfile={{
			teamName: 'react-live-chat',
			imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
			}}
			onMessageWasSent={props._onMessageWasSent}
			messageList={props.messageList}
			showEmoji
		/>
		<div className="App" id="outer-container"> 
			<Menu outerContainerId={"outer-container"} pageWrapId={"page-wrap"}>
				<a id="home" className="menu-item" href="/">Home</a>
				<a id="about" className="menu-item" href="/about">About</a>
				<a id="contact" className="menu-item" href="/contact">Contact</a>
				<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
			</Menu>
			<div id="page-wrap">
				<div className="container">
						{/* <Header user={props.user} /> */}
						<Image />	
						<br />	
						<br />
						{/* <HomeComp /> */}
		<Jumbotron>
		<Button href="/login" bsStyle="primary" bsSize="large" block>
			Log In
		</Button>
	  <Button bsSize="large" block>
Sign Up	  </Button>
</Jumbotron>
	  </div>

	  </div>
	  </div>

    </div>

	
);



export default Home