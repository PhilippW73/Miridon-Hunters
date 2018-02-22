import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
//import './App.css'
//import LoginForm from '../components/LoginForm'
//import SignupForm from '../components/SignupForm'
import Header from '../components/Header'
import HomeComp from '../components/HomeComp'
import DisplayLinks from '../components/DisplayLinks'
import {Launcher} from '../components/Chat2'
import Menu  from '../components/Navbar/menus/pushRotate';



const Home = props => (

	<div className="App" id="outer-container">	
		<Menu outerContainerId={"outer-container"} pageWrapId={"page-wrap"}>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
		<div id="page-wrap">
			{/* <Header user={props.user} /> */}
			<DisplayLinks />
			<HomeComp />
			</div>
			<Launcher
				agentProfile={{
				teamName: 'react-live-chat',
				imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
				}}
				onMessageWasSent={props._onMessageWasSent}
				messageList={props.messageList}
				showEmoji
			/>
		</div>
		
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