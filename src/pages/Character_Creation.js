// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import Image from "../components/Image";
// import Chat from "../components/Chat";
// import Navbar from "../components/Navbar";
// import Input from "../components/Input";
// import Row from "../components/Row";
// import ButtonDropdown from "../components/ButtonDropdown";
// //import Column from "../components/Colmun";



class Upgrade_and_Shop extends Component {
  state = {
    error: "",
    name: "",
    description: "",
    image: "",
    classes: [],
    weapons: [],
    currentWeapon: {},
    material: "steel",
    currentClass: {},
    strength: 0,
    speed: 0,
    comments: "Select your class, beginning stats, and beginning weapon."
  };


//   componentDidMount() {
//     //how are we getting the id?
//     //First time: get character, action types, actions
//     this.getClasses();
//   }
//   //Get data from Mongo
//     getChasses() {
//       mongo.getClasses()
//         .then(res => {
        
//           this.setState({
//             classes: res.data.message
//           })
//           this.getWeapons();
//         })
//         .catch(err => console.log(err));
//     }

//     getWeapons() {
//       mongo.getStartWeapons()
//         .then(res => {
//           let weapons = [];
//           for(let i = 0; i < res.data.message.length; i++){
//             weapons[res.data.message[i].material].push(res.data.message);
//           }
//           this.setState({weapons: weapons});
//         })
//         .catch(err => console.log(err));
//     }

//   //Handles choice of actions
//   handleChange = (event) => {
//     switch (event.target.id) {
//       case "strength":
//       case "speed":
//         this.setState({ [event.target.id]: event.target.value - this.state.currentClass[event.target.id]})
//         break;
//       case "image":
//       case "description":
//       case "name":
//         this.setState({ [event.target.id]: event.target.value});
//         break;
//     }
//   }
//   handleClassChange = (event) => {
//     const newClass = this.state.classes.find(function(element) {
//       return element.name === event.target.value;
//     });
//     this.setState({ currentClass: newClass});
//   }
//   handleWeaponChange = (event) => {
//     const newWeapon = this.state.weapons.find(function(element) {
//       return element.name === event.target.value;
//     });
//     this.setState({ currentWeapon: newWeapon});
//   }

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if(!this.currentClass){
//       this.setState({comments: "Please select a class before submitting."});
//     } else {
//       if(this.state.strength + this.state.speed != 4 ){
//         this.setState({comments: "Please use 4 stat points before submitting."});
//       } else {
//         if(!this.state.currentWeapon){
//           this.setState({comments: "Please select a weapon before submitting."});
//         } else {
//           mongo.createCharacter(props.user._id, this.state)
//           .then(res => {
//             this.setState({comments: "Character created."});
//           })
//           .catch(err => {
//             console.log(err)
//             this.setState({comments: "Please fill in character information before submitting."});
//           });
//         }
//       }
//     }
//   };


//   // currentMaterial: {},
//   // currentStatChangeAmount: 0,
//   // currentWeapon: {},
//   render() {
//     return (
//       <Container>
//         <Header />
//         <Row>
//           <Col size="md-8">
//               {/* Character name
//               Class
//               Weapon
//               Image
//               Description
//               Stats */}
//             <form>
//               <FormGroup controlId="name">
//                 <ControlLabel>Name</ControlLabel>
//                 <FormControl id="name"
//                 type="text"
//                 label="Name"
//                 placeholder="Enter character name"
//                 onChange={this.handleChange}
//                 value={this.state.name}/>
//               </FormGroup>
//                 <ButtonDropdown name="Class" faIcon="fa-users" list={this.state.classes} current={this.state.currentClass.name} onSelect={this.handleClassChange}/>
//                 <ButtonDropdown name="Weapon" faIcon="fa-crosshairs" list={this.state.weapons} current={this.state.currentWeapon.name} onSelect={this.handleWeaponChange}/>
//                 <FormGroup controlId="description">
//                 <ControlLabel>Description</ControlLabel>
//                 <FormControl id="description"
//                 type="text"
//                 label="Description"
//                 placeholder="Enter character description" 
//                 onChange={this.handleChange}
//                 value={this.state.description}/>
//               </FormGroup>
//               <FormGroup>
//                 <FormControl.Static>You have 4 points to spend on stats.</FormControl.Static>
//               </FormGroup>
//               <FormGroup controlId="strength">
//                 <ControlLabel>Strength Points</ControlLabel>
//                 <FormControl id="strength"
//                 type="number"
//                 label="strength"
//                 value={this.state.currentClass.strength_point + this.state.strength}
//                 min={this.state.currentClass.strength_point}
//                 max={this.state.currentClass.strength_point + 4-this.state.speed}
//                 onChange={this.handleChange}/>
//               </FormGroup>
//               <FormGroup controlId="speed">
//                 <ControlLabel>Speed Points</ControlLabel>
//                 <FormControl id="speed"
//                 type="number"
//                 label="speed"
//                 value={this.state.currentClass.speed_point + this.state.speed}
//                 min={this.state.currentClass.speed_point}
//                 max={this.state.currentClass.speed_point + 4-this.state.strength}
//                 onChange={this.handleChange}/>
//               </FormGroup>
              
//               <Button type="submit">Submit</Button>
//             </form>
//           </Col>
//           <Col size="md-4">
//               <Thumbnail src={this.state.image ? this.state.image : "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-group-512.png"} responsive />
//               <Form>
//                 <FormGroup controlId="image">
//                   <ControlLabel>Image URL</ControlLabel>
//                   <FormControl id="image"
//                   type="text"
//                   label="Image URL"
//                   placeholder="Enter image url" 
//                   onChange={this.handleChange}
//                   value={this.state.image}/>
//                 </FormGroup>
//               </Form>
//           </Col>
//         </Row>
//         <Footer />
//       </Container>
//     );
//   }
// };
  
// export default CharacterCreation;

