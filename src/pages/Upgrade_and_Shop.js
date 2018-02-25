import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import ButtonDropdown from "../components/ButtonDropdown";
import Button from "../components/Button";
import ButtonLinkInfo from "../components/ButtonLinkInfo";
import mongo from "../utils/mongo";


class Upgrade_and_Shop extends Component {
  state = {
    error: "",
    player: {},
    materials: [],
    currentMaterial: {},
    weapons: {
      steel: [],
      mechanical: [],
      puzzle: []
    },
    comments: "Select a material to exchange it for others or use it."
  };

  componentDidMount() {
    //how are we getting the id?
    //First time: get character, action types, actions
    this.getCharacter();
  }

  getCharacter() {
    mongo.getCharacter({
      //TODO: pass in id somehow
        id: props.id
      })
      .then(res => {
        let player = this.state.player;
        
        player.fullStats = res.data.message;
        this.setState({
          player: player
        })
        this.getMaterials();
      })
      .catch(err => console.log(err));
  }

  getMaterials() {
    //gives exchange rates and which materials are available
    mongo.getAvailableMaterials()
      .then(res => {
        this.setState({materials: res.data.message});
        this.getWeapons();
      })
      .catch(err => console.log(err));
  }
  getWeapons() {
    mongo.getWeapons()
      .then(res => {
        let weapons = [];
        for(let i = 0; i < res.data.message.length; i++){
          weapons[res.data.message[i].material].push(res.data.message);
        }
        this.setState({weapons: weapons});
      })
      .catch(err => console.log(err));
  }
  getStatExchange() {
    
  }
  //Handles choice of actions
  handleActionChange = (event) => {
    let player = this.state.player;
    player[event.target.name] = event.target.value;
    this.setState({ player: player});
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      meleeCombo: false,
      actionsDisabled: true,
      comments: ""
    });
    this.enemyChoice();
  };

  render() {
    return (
      <Container>
        <Header />
        <Row>
          <Col size="md-offset-1 md-4">
            {/* Current Character Items + Materials*/}
          </Col>
          <Col size="md-offset-1 md-4">
            {/* Dropdown at top */}
            {/* Exchange for x material dropdown */}
            {/* Item list with scroll bar OR current stat list + cost to add more*/}
            {/* make purchase button */}
            <ButtonDropdown name="Material" faIcon="fa-cubes" list={this.state.materials}/>
            <ButtonDropdown name="Exchange" faIcon="fa-exchange" list={this.state.materials}/>
            {this.state.currentMaterial === "steel" ? <ButtonDropdown name="Weapon" faIcon="fa-crosshairs" list={this.state.steelweapons}/> : ""}
            <Button onClick={this.handleFormSubmit} data-value="Buy">
              Buy
            </Button>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <div>{this.state.comments}
            </div>
            <ButtonLinkInfo link="exchangerates" text="See Exchange Rates"/>
            <ButtonLinkInfo link="weapons" text="See Weapons"/>
            <ButtonLinkInfo link="leveling-exp" text="See Stat Boost Rates"/>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
};

export default Upgrade_and_Shop;
