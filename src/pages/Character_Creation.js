import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Row from "../components/Row";
//import Column from "../components/Colmun";


class Upgrade_and_Shop extends Component {
  state = {
    error: "",
    player: {},
    classes: [],
    weapons: [],
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
          <Col size="md-offset-1 md-4">
            {/* Current Character Items + Materials*/}
          </Col>
          <Col size="md-offset-1 md-4">
            {/* Dropdown at top */}
            {/* Exchange for x material dropdown */}
            {/* Item list with scroll bar OR current stat list + cost to add more*/}
            {/* make purchase button */}
            <ButtonDropdown name="Material" faIcon="fa-cubes" list={this.state.materials} current={this.state.currentMaterial.name} onSelect={this.handleMaterialChange}/>
            <ButtonDropdown name="Exchange" faIcon="fa-exchange" list={this.state.materials} current={this.state.currentExchange.name} onSelect={this.handleExchangeChange}/>
            
            <form>
              <FormGroup
                controlId="exchangeInput"
                // validationState={this.getValidationState()}
              >
                <FormControl
                  type="number"
                  value={this.state.currentExchangeAmount}
                  placeholder="Enter amount to exchange"
                  onChange={this.handleChange}
                  max={this.state.player[this.state.currentExchange.name]}
                />
                {/* <FormControl.Feedback /> */}
              </FormGroup>
            </form>
        
            {this.state.currentMaterial === "steel" ? <ButtonDropdown name="Weapon" faIcon="fa-crosshairs" list={this.state.steelweapons}/> : ""}
            <Button onClick={this.handleFormSubmit} data-value="Buy">
              Buy
            </Button>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
};
  
export default CharacterCreation;

