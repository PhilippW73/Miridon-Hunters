import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
//import './App.css'
//import LoginForm from '../components/LoginForm'
//import SignupForm from '../components/SignupForm'
import Header from '../components/Header'
//import HomeComp from '../components/HomeComp'

const Home = props => (
	<div className="App">	
		<Header user={props.user} />
		{/* LINKS to our different 'pages' */}
		{/*<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
		*/}	
	</div>
);

export default Home