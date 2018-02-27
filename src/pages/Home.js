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
import Logo from '../components/Logo'
import { Well, Button, Jumbotron } from 'react-bootstrap';
import Imagetwo from '../components/Imagetwo'
// https://react-bootstrap.github.io/components/buttons/

const Home = props => (
    <div>



		<div id="outer-container"> 
			<Menu 
				left 
				outerContainerId={"outer-container"} 
				pageWrapId={"page-wrap"}
				customBurgerIcon={ <img src= "/../public/menuicon.png"/> }  
			>
				<br />
				<a href="/">
					<Imagetwo />
				</a>
				<br />
				<a id="login" className="menu-item" href="/login">
					<h3>Log In</h3>
				</a>
				<a id="profile" className="menu-item" href="/profile">
					<h3>Profile</h3>
				</a>
				<a id="createhero" className="menu-item" href="/character_creation">
					<h3>Create Hero</h3>
				</a>
				<a id="selecthero" className="menu-item" href="/character_selection">
					<h3>Select Hero</h3>
				</a>
				<a id="battle" className="menu-item" href="/battle">
					<h3>Battle</h3>
				</a>
				<a id="upgrades" className="menu-item" href="/upgrades">
					<h3>Upgrades</h3>
				</a>
				<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
				<a id="logout" className="menu-item" href="" onClick={props._logout}>Logout</a>
			</Menu>

			<main id="page-wrap">
			<div className="container">
					< br />
					< br />
						{/* <Header user={props.user} /> */}
						<Logo />	
						<br />	
						<br />
						{/* <HomeComp /> */}
					<Jumbotron>
						<Button href="/login" bsStyle="primary" bsSize="large" block>
							Log In
						</Button>
						<Button href="/signup" bsSize="large" block>
							Sign Up	  
						</Button>
					</Jumbotron>
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
			</main>


		</div>
	</div>
);



export default Home