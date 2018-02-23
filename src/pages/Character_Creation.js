import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Row from "../components/Row";
//import Column from "../components/Colmun";
import { Route, Link } from 'react-router-dom'
//import './App.css'
//import LoginForm from '../components/LoginForm'
//import SignupForm from '../components/SignupForm'

import HomeComp from '../components/HomeComp'
import DisplayLinks from '../components/DisplayLinks'
import {Launcher} from '../components/Chat2'
import Menu  from '../components/Navbar/menus/pushRotate';
const CharacterCreate = props => (
	
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
            {/* <Header user={props.user} /> */}
            <DisplayLinks />
            <HomeComp />
        
        </div>
		</div>

    </div>
);
export default CharacterCreate