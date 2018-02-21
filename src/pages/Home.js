import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
//import './App.css'
//import LoginForm from '../components/LoginForm'
//import SignupForm from '../components/SignupForm'
import Header from '../components/Header'
import HomeComp from '../components/HomeComp'
import DisplayLinks from '../components/DisplayLinks'

const Home = props => (
	<div className="App">	
		<Header user={props.user} />
		<DisplayLinks _logout={props._logout} loggedIn={props.loggedIn} />
		<HomeComp />
		{/* LINKS to our different 'pages' */}
		{/*<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
		*/}	
	</div>
);

export default Home