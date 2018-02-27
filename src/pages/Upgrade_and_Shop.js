import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Row from "../components/Row";
import Col from "../components/Col";
import ButtonDropdown from "../components/ButtonDropdown";
import axios from "axios";

class Upgrade_and_Shop extends Component {
  state = {
    error: "",
    user_id: 0,
    player: {},
    materials: [],
    currentMaterial: {},
    currentExchange: {},
    currentExchangeAmount: 0,
    currentStatChangeAmount: 0,
    currentWeapon: {},
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
    this.getUser();
  }


  getUser() {
    axios.get("/api/user")
      .then(function(response) {
        this.setState({user_id: response._id})
        this.getCharacter();
      })
  }
  
  //Get data from Mongo
    getCharacter() {
      axios.get("/api/api/Character/"+ this.state.user_id)
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

      axios.get("/api/api/Materials")
        .then(res => {
          this.setState({materials: res.data.message});
          this.getWeapons();
        })
        .catch(err => console.log(err));
    }

    getWeapons() {
      axios.get("/api/api/Weapons/Purchasable/" + this.state.currentMaterial + "/" + this.state.player[this.state.currentMaterial])
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
  handleMaterialChange = (event) => {
    const current = this.state.materials.find(function(element) {
      return element.name === event.target.value;
    })
    this.setState({ currentMaterial: current});
    this.getWeapons();
  }

  handleExchangeChange = (event) => {
    const current = this.state.materials.find(function(element) {
      return element.name === event.target.value;
    })
    this.setState({ currentExchange: current});
  }

  handleExchangeAmountChange = (event) => {
    this.setState({ currentExchangeAmount: event.target.value});
  }

  handleStatAmountChange = (event) => {
    this.setState({ currentStatChangeAmount: event.target.value});
  }


  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.currentExchangeAmount > 0) {
      axios.put("/api/api/Material/exchange/"+this.state.player.character_id + "/" +this.state.currentMaterial.name, + "/" +this.state.currentExchange.name + "/" +this.state.currentExchangeAmount)
      .then(res => {
        this.setState({comments: res.comments});
        this.submitBuy()
      })
      .catch(err => console.log(err));
    } else {
      this.submitBuy();
    }
  };

  submitBuy = () => {
    switch (this.state.currentMaterial) {
      case "Meat/ Protein (lbs.)":
      case "Produce (lbs.)":
      case "Ghost HP":

      axios.put("/api/api/StatBuy/" + this.state.player.character_id + "/" + this.state.currentMaterial + "/" + this.state.currentStatChangeAmount)
        .then(res => {
          this.setState({comments: res.comments});
          this.setState({
            currentExchangeAmount: 0,
            currentStatChangeAmount: 0
          });
        })
        .catch(err => console.log(err));
        break;
      case "Steel (lbs.)":
      case "steel":
      case "Mechanical Parts (oz.)":
      case "Puzzle Parts (oz.)":
      axios.put("/api/api/Weapon/Buy/"+ this.state.player.character_id + "/" + this.state.currentMaterial + "/" + this.state.currentWeapon)
        .then(res => {
          this.setState({comments: res.comments});
          this.setState({
            currentExchangeAmount: 0,
            currentStatChangeAmount: 0
          });
        })
        .catch(err => console.log(err));
        break;
      case "Imperial Pounds":
      default:
        this.setState({
          currentExchangeAmount: 0,
          currentStatChangeAmount: 0
        });
        break;
    }
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
