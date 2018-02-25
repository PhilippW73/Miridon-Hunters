// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Image from "../components/Image";
// import Chat from "../components/Chat";
// import Navbar from "../components/Navbar";
// import Input from "../components/Input";
// import Row from "../components/Row";
// import Col from "../components/col";
// import ButtonDropdown from "../components/ButtonDropdown";

// class Upgrade_and_Shop extends Component {
//   state = {
//     error: "",
//     player: {},
//     materials: [],
//     weapons: [],
//     comments: "Select a material to exchange it for others or use it."
//   };


//   componentDidMount() {
//     //how are we getting the id?
//     //First time: get character, action types, actions
//     this.getCharacter();
//   }

//   getCharacter() {
//     mongo.getCharacter({
//       //TODO: pass in id somehow
//         id
//       })
//       .then(res => {
//         let player = this.state.player;
        
//         player.fullStats = res.data.message;
//         this.setState({
//           player: player
//         })
//         this.getExchangeRates();
//       })
//       .catch(err => console.log(err));
//   }

//   getExchangeRates() {
//     //gives exchange rates and which materials are available
//   }
//   getWeapons() {

//   }
//   getStatExchange() {


//   render() {
//     return (
//       <Container>
//         <Header />
//         <Row>
//           <Col size="md-offset-1 md-4">
//             {/* Current Character Items + Materials*/}
//           </Col>
//           <Col size="md-offset-1 md-4">
//             {/* Dropdown at top */}
//             {/* Exchange for x material dropdown */}
//             {/* Item list with scroll bar OR current stat list + cost to add more*/}
//             {/* make purchase button */}
//             <ButtonDropdown name="Material" faIcon="" />
//           </Col>
//         </Row>
//         <Row>
//           <Col size="md-12">
//             <div>{this.state.comments}
//             </div>
//             <a class="btn btn-default" href="http://miridon.reuniontechnologies.com/page/exchangerates" role="button" target="_blank">See Exchange Rates</a>
//             <a class="btn btn-default" href="http://miridon.reuniontechnologies.com/page/weapons" role="button" target="_blank">See Weapons</a>
//             <a class="btn btn-default" href="http://miridon.reuniontechnologies.com/page/leveling-exp" role="button" target="_blank">See Stat Boost Rates</a>
//           </Col>
//         </Row>
//         <Footer />
//       </Container>
//     );
//   }
// }
  

// export default Upgrade_and_Shop;
