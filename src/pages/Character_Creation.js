import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Row from "../components/Row";
import ButtonDropdown from "../components/ButtonDropdown";
//import Column from "../components/Colmun";


class Upgrade_and_Shop extends Component {
  state = {
    error: "",
    player: {},
    addStrength: 0,
    addSpeed: 0,
    classes: [],
    weapons: [],
    currentWeapon: {},
    currentClass: {},
    image: "",
    comments: "Select your class, beginning stats, and beginning weapon."
  };

  componentDidMount() {
    //how are we getting the id?
    //First time: get character, action types, actions
    this.getClasses();
  }
  //Get data from Mongo
    getChasses() {
      mongo.getClasses()
        .then(res => {
        
          this.setState({
            classes: res.data.message
          })
          this.getWeapons();
        })
        .catch(err => console.log(err));
    }

    getWeapons() {
      mongo.getStartWeapons()
        .then(res => {
          let weapons = [];
          for(let i = 0; i < res.data.message.length; i++){
            weapons[res.data.message[i].material].push(res.data.message);
          }
          this.setState({weapons: weapons});
        })
        .catch(err => console.log(err));
    }

  //Handles choice of actions
  handleChange = (event) => {
    let player = this.state.player;
    player[event.target.name] = event.target.value;
    this.setState({ player: player});
  }


  handleFormSubmit = event => {
    event.preventDefault();
    mongo.createCharacter(this.state.player)
    .then(res => {
      this.setState({comments: "Character created."});
    })
    .catch(err => console.log(err));
  };


  // currentMaterial: {},
  // currentStatChangeAmount: 0,
  // currentWeapon: {},
  render() {
    return (
      <Container>
        <Header />
        <Row>
          <Col size="md-8">
              {/* Character name
              Class
              Weapon
              Image
              Description
              Stats */}
            <form>
              <FormGroup controlId="name">
                <ControlLabel>Name</ControlLabel>
                <FormControl id="name"
                type="text"
                label="Name"
                placeholder="Enter character name" />
              </FormGroup>
              <ButtonDropdown name="Class" faIcon="fa-users" list={this.state.classes} current={this.state.currentClass.name} onSelect={this.handleClassChange}/>
              <ButtonDropdown name="Weapon" faIcon="fa-crosshairs" list={this.state.weapons} current={this.state.currentWeapon.name} onSelect={this.handleWeaponChange}/>
              <FormGroup controlId="description">
                <ControlLabel>Description</ControlLabel>
                <FormControl id="description"
                type="text"
                label="Description"
                placeholder="Enter character description" />
              </FormGroup>
              <FormGroup>
                <FormControl.Static>You have 4 points to spend on stats.</FormControl.Static>
              </FormGroup>
              <FormGroup controlId="strength">
                <ControlLabel>Strength Points</ControlLabel>
                <FormControl id="strength"
                type="number"
                label="strength"
                value={this.state.player.strength_point + this.state.addStrength}
                min={this.state.player.strength_point}
                max={this.state.player.strength_point + 4-this.state.addSpeed}/>
              </FormGroup>
              <FormGroup controlId="speed">
                <ControlLabel>Speed Points</ControlLabel>
                <FormControl id="speed"
                type="number"
                label="speed"
                value={this.state.player.speed_point + this.state.addSpeed}
                min={this.state.player.speed_point}
                max={this.state.player.speed_point + 4-this.state.addStrength}/>
              </FormGroup>
              
              
              <Button type="submit">Submit</Button>
            </form>
          </Col>
          <Col size="md-4">
              <Thumbnail src={this.state.image ? this.state.image : "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-group-512.png"} responsive />
              <Form>
                <FormGroup controlId="image">
                  <ControlLabel>Image URL</ControlLabel>
                  <FormControl id="image"
                  type="text"
                  label="Image URL"
                  placeholder="Enter image url" />
                </FormGroup>
              </Form>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
};
  
export default CharacterCreation;

