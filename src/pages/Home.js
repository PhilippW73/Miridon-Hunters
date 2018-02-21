import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
//import './App.css'
//import LoginForm from '../components/LoginForm'
//import SignupForm from '../components/SignupForm'
import Header from '../components/Header'
import HomeComp from '../components/HomeComp'
import DisplayLinks from '../components/DisplayLinks'
import {Launcher} from '../components/Chat2';

const Home = props => (
	<div className="App">	
		<Header user={props.user} />
		<DisplayLinks _logout={props._logout} loggedIn={props.loggedIn} />
		<HomeComp />
		<Launcher
			agentProfile={{
			teamName: 'react-live-chat',
			imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
			}}
			onMessageWasSent={props._onMessageWasSent}
			messageList={props.messageList}
			showEmoji
		/>
		{/* LINKS to our different 'pages' */}
		{/*<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
		*/}	
	</div>
);

export default Home