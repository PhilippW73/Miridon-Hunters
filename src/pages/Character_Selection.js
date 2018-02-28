import React, { Component } from 'react';
import "./Character_Selection.css";
import { Route, Link } from 'react-router-dom';
import Footer from "../components/Footer";
import Image from "../components/Image";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Greeting from "../components/Greeting";
import Wins_Losses from "../components/Wins_Losses";
import API from "../utils/user/API";
import FormBtn from "../components/FormBtn";
import {Launcher} from '../components/Chat2';
import Menu  from '../components/Navbar/menus/pushRotate';
import Imagetwo from '../components/Imagetwo';
import { Well, Button, Jumbotron, Col, SplitButton, MenuItem, Glyphicon, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';


const Character_Selection = props => (
<div>
    <footer className="navbar-fixed-bottom">
        <div className="container">
            <div className="row">
                <Col xs={2} md={3}>
                    <p>
                        <a href="/get-started">Get Started</a> 
                    </p>
                    </Col>
                    <Col xs={2} md={3}>
                    <p>
                        <a href="/about-us">About Us</a> 
                    </p>
                    </Col>
                    <Col xs={2} md={3}>
                    <p>
                        <a href="/support">Support</a> 
                    </p>
                    </Col>
                    <Col xs={2} md={3}>
                    <p>
                        <a href="/information">Information</a> 
                    </p>
                </Col>
            </div>
        </div>
    </footer>

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
        <Menu left outerContainerId={"outer-container"} pageWrapId={"page-wrap"}>
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
            <a id="createhero" className="menu-item" href="/createhero">
                <h3>Create Hero</h3>
            </a>
            <a id="selecthero" className="menu-item" href="/selecthero">
                <h3>Select Hero</h3>
            </a>
            <a id="battle" className="menu-item" href="/battle">
                <h3>Battle</h3>
            </a>
            <a id="upgrades" className="menu-item" href="/upgrades">
                <h3>Upgrades</h3>
            </a>
            <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </Menu>
  								
        <div id="page-wrap">
            <div className="container">
                {/* <Header user={props.user} /> */}
                <h1> Select a Character </h1>	
                <br />
                <SplitButton href="http://google.com" bsStyle="danger" bsSize="medium" title="Main List" >
                        <MenuItem eventKey="1">Delete List</MenuItem>
                        <MenuItem eventKey="2">Edit List Name</MenuItem>
                </SplitButton>
                <br />
                <br />
                <div className="jumbotron">	
                    <div className="row">
                        <Col md={6} md={6}>
                            <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere.</p>
                        </Col>
                        <Col md={6} md={6}>
                            <Image/>
                        </Col>
                    </div>
                        
                
                </div>
                <ButtonToolbar>
                    <ButtonGroup>
                    <Button bsStyle="warning" bsSize="large">
                        <Glyphicon glyph="knight" />  Select & Battle!
                    </Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </div>
        </div>
    </div>
</div>

);




export default Character_Selection;
 

