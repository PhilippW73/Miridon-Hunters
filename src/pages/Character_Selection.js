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
import CharacterSelec from "../components/CharacterSelec";
import {Launcher} from '../components/Chat2';
import Menu  from '../components/Navbar/menus/pushRotate';
import Imagetwo from '../components/Imagetwo';
import { Well, Button, Jumbotron, Col, SplitButton, MenuItem, Glyphicon, ButtonToolbar, ButtonGroup } from 'react-bootstrap';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';


class CharacterSelection extends React.Component {
    state = {
        user_id: "",
        character_id: 0,
        characters: [],
        character: {}
        // character_name: "",
        // character_author: "",
        // character_description: "",
        // class_name: "",
        // character_image: "",
        // strength_point: 0,
        // speed_point: 0,
        // strength_point_exp: 0,
        // speed_point_exp: 0,
        // hit_point: 0,
        // ghost_hp: 0,
        // wins: 0,
        // losses: 0,
        // weapon:"",
        // weaponmaterial: "",
        // meat_protein_lbs: 0, 
        // steel_lbs: 0,
        // mechanical_parts_oz: 0,
        // puzzle_parts_oz: 0,
        // imperial_pounds: 0,
        // produce_lbs: 0,
        // ghost_hP: 0
    };
    
    componentDidMount() {
         this.getUser();
      }
    
      
      getUser() {
        axios.get("/api/user")
          .then(function(response) {
            this.setState({
                user_id: response._id,
                character_id: last_character
            })
            this.getCharactersNames();
          })
      }
    
    getCharactersNames() {
        axios.get("/api/api/Characternames/")
            .then(res => {
              this.setState({
                characters: res.data.message
              })
            .catch(err => console.log(err));
      })
    }
    
    getCharacter() {
        axios.get("/api/api/Character/"+this.state.character_id)
            .then(res => {
              this.setState({
                character: res.data.message
              })
            })
            .catch(err => console.log(err));
    }
    
    onSelect = (event) => {
        this.setState({ character_id: event.target.value });
        this.getCharacter;
    }

    render() {
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
                        <SplitButton bsStyle="danger" bsSize="medium" title={this.character.name} >
                            {this.state.characters
                                .map(char => {
                                    return (
                                        <MenuItem eventKey={char._id} value={char.id} onSelect={this.onSelect}>{char.name}</MenuItem>
                                    );
                            })}
                        </SplitButton>
                        <br />
                        <br />
                        <div className="jumbotron">	
                            <div className="row">
                                <Col md={6} md={6}>
                                    <CharacterSelec {...this.state.character}/>
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
    }

};



export default Character_Selection;
 

