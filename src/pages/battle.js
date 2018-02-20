import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Row from "../components/Row";
import Col from "../components/col";
import Greeting from "../components/Greeting";
import Wins_Losses from "../components/Wins_Losses";

//import API from "../utils/API";
//import mongo from "../utils/mongo";
//import Container from "../components/Container";
import {
  aimedAttack,
  block,
  charge,
  dodge,
  gunAttack,
  meleeAttack,
  meleeCombo,
  reload,
  restoreSpeed,
  restoreStrength
} from "../utils/actions";

const stats = [
  {name: "Hit Points",
  reference: "hit_point",
  progressClass: "bg-danger"},
  {name: "Strength",
  reference: "strength_point",
  progressClass: "bg-warning"},
  {name: "Speed",
  reference: "speed_point",
  progressClass: "bg-success"},
  {name: "Ghost Hit Points",
  reference: "ghost_hp",
  progressClass: ""}];


class Battle extends Component {
  state = {
    error: "",
    player: {
      position: "player",
      opposition: "enemy",
      Movement: "",
      Offensive: "",
      Defensive: "",
      actions: {}
    },
    enemy: {
      position: "enemy",
      opposition: "player",
      Movement: "",
      Offensive: "",
      Defensive: "",
      actions: {}
    },
    actionTypes: {},
    first: "",
    comments: "Choose your actions for the round (one of each), and then press 'Start Turn'."
  };


  componentDidMount() {
    //how are we getting the id?
    //First time: get character, action types, actions
    this.getCharacter();
  }

  getCharacter() {
    mongo.getCharacter({
      //TODO: pass in id somehow
        id
      })
      .then(res => {
        let player = this.state.player;
        
        player.fullStats = res.data.message;
        this.setState({
          player: player
        })
        this.getEnemy();
      })
      .catch(err => console.log(err));
  }

  getEnemy() {
    if (this.state.player.fullStats.wins != 0) {
      const randEnemy = (Math.random() * .2 - .1) + (parseFloat(this.state.player.fullStats.wins) / (parseFloat(this.state.player.fullStats.wins) + parseFloat(this.state.player.fullStats.losses)));
    } else {
      const randEnemy = (Math.random() * .1);
    }
    mongo.getCharacterByRatio(randEnemy)
      .then(res => {
        let enemy = this.state.enemy;
        enemy.fullStats = res.data.message;
        this.setState({
          enemy: enemy
        })
        this.getActions();
      })
      .catch(err => console.log(err));
  }

  getActionTypes() {
    mongo.getActionTypes()
      .then(res => {
        //Send action type info 
        this.setState({
          actionTypes: res.data.message
        })
      })
      .catch(err => console.log(err));
  }

  getActions(who) {
    //sends id based on who
    const id = this.state.eval(who).fullStats.character_id;
    const strength = this.state.eval(who).curStats.strength_point;
    const speed = this.state.eval(who).curStats.speed_point;
    mongo.getActions(id, strength, speed)
      .then(res => {
        let temp = this.state.eval(who);
        temp.actions = res.data.message;
        this.setState({
          [who]: temp
        })
      })
      .catch(err => console.log(err));
  }

  initiative = () => {
    if (this.state.player.fullStats.speed_point > this.state.enemy.fullStats.speed_point) {
      this.setState({first: "player"});
    } else if (this.state.player.fullStats.speed_point < this.state.enemy.fullStats.speed_point || Math.random()<.5 ) {
      this.setState({first: "enemy"});
    } else {
      this.setState({first: "player"});
    }
  }

  //Handles choice of actions
  handleActionChange = (event) => {
    let player = this.state.player;
    player[event.target.name] = event.target.value;
    this.setState({ player: player});
  }

  handleFormSubmit = event => {
    event.preventDefault();
    //On submit... 1. Make enemy actions up 2. Figure out who goes first 3. Run through actions
  };

  render() {
    return (
      <Container>
        <Header />
        <Row>
          <Col size="md-offset-1 md-4">
            <BattleChar {...this.state.player} stats={stats} />
          </Col>
          <Col size="md-offset-1 md-4">
            <BattleChar {...this.state.enemy} stats={stats} />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <h3>Actions</h3>
            <div className="btn-group" role="group">
              {props.actionTypes.map(actionType => <ButtonDropdown actionType actions strength={this.state.player.curStats.strength_point} speed={this.state.player.curStats.speed_point} weapon={this.state.player.fullStats.weapon}/>
                )}
              <button class="btn btn-default" type="button" id="startTurn">Start Turn
              </button> 
            </div>
            <div>{this.state.comments}
            </div>
            <a class="btn btn-default" href="http://miridon.reuniontechnologies.com/page/battlerules-actions" role="button" target="_blank">See All Actions</a>
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Battle;



//     //battle order functions
//       function turnOrder() {
//         if (player.fullStats.speed_point > enemy.fullStats.speed_point) {
//           first = "player";
//         } else if (player.fullStats.speed_point < enemy.fullStats.speed_point || Math.random()<.5 ) {
//           first = "enemy";
//         } else {
//           first = "player";
//         }
//       }
//       function initializeCharacter(id, where, func) {
//         $.get("/api/characters/" + id, function(data) {
//           console.log(JSON.stringify(where) +": "+ JSON.stringify(data));
//           where.fullStats = Object.assign({}, data);
//           where.curStats = Object.assign({}, data);
//           console.log(where.fullStats);
//           where.fullStats.hit_point = 5*(data.strength_point + data.speed_point);
//           func();
//         });
//       }
//       function updateProgress() {
//         // console.log("Max: "+JSON.stringify(player.fullStats));
//         // console.log("Current: "+JSON.stringify(player.curStats));
//         for(i = 0; i < stats.length; i++){
//           // console.log(stats[i]+": "+parseFloat(player.curStats[stats[i]]));
//           // console.log(parseFloat(player.curStats[stats[i]]));
//           // console.log(parseFloat(player.fullStats[stats[i]]));
//           // console.log(parseFloat(player.curStats[stats[i]])/parseFloat(player.fullStats[stats[i]]));
//           // console.log("--------------");
//           $("#"+ player.fullStats.character_id + stats[i]).attr("aria-valuenow",player.curStats[stats[i]]);
//           $("#"+ player.fullStats.character_id + stats[i]).css('width',100*parseFloat(player.curStats[stats[i]])/parseFloat(player.fullStats[stats[i]])+"%");
//           $("#"+ player.fullStats.character_id + stats[i]+ "Text").text(player.curStats[stats[i]]);
//           $("#"+ enemy.fullStats.character_id + stats[i]).attr("aria-valuenow", enemy.curStats[stats[i]]);
//           $("#"+ enemy.fullStats.character_id + stats[i]).css('width',100*parseFloat(enemy.curStats[stats[i]])/parseFloat(enemy.fullStats[stats[i]])+"%");
//           $("#"+ enemy.fullStats.character_id + stats[i]+ "Text").text(enemy.curStats[stats[i]]);
//         }

//       }
//       function initialize() {
//         console.log("Initalizing "+ $("#player").attr('value') + " as player.");
//         initializeCharacter( $("#player").attr('value'), player, initialize2);
//       }
//       function initialize2() {
//         console.log("Initalizing "+$("#enemy").attr('value') + " as enemy.");
//         initializeCharacter( $("#enemy").attr('value'), enemy, turnOrder);
//       }
//       //actions
//       function chooseOffense (who) {
//         console.log(who+" is attacking");
//         switch(eval(who).Offensive) {
//           case "Restore Strength Points":
//             restoreStrength(who);
//             break;
//           case "Melee Attack":
//             meleeAttack(who);
//             break;
//           case "Melee Combo Attack":
//             meleeCombo(who);
//             break;
//           case "Gun Attack":
//             gunAttack(who);
//             break;
//           case "Aimed Attack":
//             aimedAttack(who);
//             break;
//           // case "Reload":
//           //   reloadFunc(who);
//           //   break;
//           default:
//             break;
//         }
//             //no offensive action taken

//         //CHECK FOR SYNTAX - trying to get who's name and see if it matches first.
//         console.log("Ready for next turn part.");
//         console.log("--------------------");
//         console.log(who);
//         console.log(first);
//         if(who === first) {
//           checkDead(eval(who).opposition, chooseMove);
//         } else {
//           checkDead(eval(who).opposition, endTurn);
//         }
//       }
//       function chooseDefense (who) {
//         console.log(who+" is defending");
//         switch(eval(who).Defensive) {
//           case "Dodge":
//             dodge(who);
//             break;
//           case "Block":
//             block(who);
//             break;
//           default:
//             break;
//         }
//       }
//       function chooseMove (who) {
//         console.log(who+" is moving");
//         switch(eval(who).Movement) {
//           case "Restore Speed Points":
//             restoreSpeed(who);
//             break;
//           case "Charge":
//             charge(who);
//             break;
//           default:
//             break;
//         }
//         chooseDefense(eval(who).opposition);
//         chooseOffense(who);
//       }
//       function enemySingleChoice (i){
//         $.get("/api/actions/availableByType/"+actionTypes[i]+"/"+enemy.curStats.strength_point+"/"+enemy.curStats.speed_point, function(data) {
//           //console.log("Possible enemy actions: "+ JSON.stringify(data));
//           //if data exists
//           if(data[0]){
//             enemy[actionTypes[i]] = (data[Math.floor(Math.random()*data.length)].name);
//           }
//           if(i >= actionTypes.length - 1) {
//             enemyChoiceEnd();
//           } else {
//             enemySingleChoice(i+1);
//           }
//         });
//       }
//       function enemyChoiceEnd() {
//         console.log("Enemy choices: "+JSON.stringify(enemy, null, 2));
//         console.log("Finished:"+enemy.Movement+enemy.Offensive+enemy.Defensive);
//         if(first === "player"){
//           //player goes first
//           chooseMove(player.position);
//         } else {
//           //enemy goes first
//           chooseMove(enemy.position);
//         }
//       }
//       function enemyChoice () {
//         //console.log(JSON.stringify(enemy.curStats, null, 2));
//         var fullFunction
//         for (i = 0; i < actionTypes.length; i++){
//           //blanks it out so async functions can run all together
//           enemy[actionTypes[i]] = "";
//         }
//         enemySingleChoice(0);

//         //IF PROMISES (Not working yet so commented out)
//           // var promises = [];
//           // for (i = 0; i < actionTypes.length; i++){
//           //   promises[i] = $.get("/api/actions/availableByType/"+actionTypes[i]+"/"+enemy.curStats.strength_point+"/"+enemy.curStats.speed_point, function(data) {
//           //     //console.log("Possible enemy actions: "+ JSON.stringify(data));
//           //     //if data exists
//           //     if(data[0]){
//           //       enemy[actionTypes[i]] = (data[Math.floor(Math.random()*data.length)]);
//           //     }
//           //     // if(actionTypes[i]="Movement"){
//           //     //   //figure out turn order

//           //     // }
//           //   });
//           // }

//           // // await Promise.all(promises);

//           // // var promise1 = Promise.resolve(3);
//           // // var promise2 = 42;
//           // // var promise3 = new Promise(function(resolve, reject) {
//           // //   setTimeout(resolve, 100, 'foo');
//           // // });

//           // Promise.all(promises).then(function(values) {
//           //   console.log("Enemy choices: "+JSON.stringify(enemy, null, 2));
//           //   console.log("Finished:"+enemy.Movement+enemy.Offensive+enemy.Defensive);
//           //   if(first === "player"){
//           //     //player goes first
//           //     chooseMove(player.position);
//           //   } else {
//           //     //enemy goes first
//           //     chooseMove(enemy.position);
//           //   }
//           // });


//       }
//       function updateDropdownButton (type, newValue) {
//         updateAction(player, type, newValue)
//         if(!newValue){
//           newValue = type;
//         }
//         $("#"+type+"DropdownText").text(newValue);
//       }
//       function updateAction (who, type, newValue) {
//         who[type] = newValue;
//         console.log(type + " set to "+newValue);
//       }
//       function startTurn () {
//         //disable dropdowns
//         $(".dropdown-toggle").addClass("disabled");
//         //enemy selects
//         console.log("dropdowns disabled");
//         toggleCombo(true);
//         $("#comments p").text("");
//         updateProgress();
//         enemyChoice();

//       }
//       function endTurn () {
//         console.log("Turn end");
//         //set buttons back to normal
//         for (i = 0; i < actionTypes.length; i++){
//           updateDropdownButton(actionTypes[i])
//         }
//         updateProgress();
//         //enable dropdowns
//         $(".dropdown-toggle").removeClass("disabled");
//       }
//       function checkDead (who, func) {
//         if(eval(who).curStats.hit_point < 1) {
//           $(".dropdown-toggle").addClass("disabled");
//           $("#startTurn").addClass("disabled");
//           if (who === "player") {
//             //lose
//             $("#comments p").append(" You lost the battle.");
//             $.ajax({
//               method: "PUT",
//               url: "/api/lost/"+player.fullStats.character_id
//             });
//             $.ajax({
//               method: "PUT",
//               url: "/api/won/"+enemy.fullStats.character_id
//             });
//           } else {
//             //win
//             $("#comments p").append(" You won the battle!");
//             $.ajax({
//               method: "PUT",
//               url: "/api/won/"+player.fullStats.character_id
//             });
//             $.ajax({
//               method: "PUT",
//               url: "/api/lost/"+enemy.fullStats.character_id
//             });
//           }
//         } else {
//           func(who);
//         }
//       }
//       function toggleCombo(hide) {
//         //if ($(":contains('Melee Combo Attack')").hasClass("hidden")){
//         if(hide) {
//           $("a:contains('Melee Combo Attack')").addClass("hidden");
//         } else {
//           $("a:contains('Melee Combo Attack')").removeClass("hidden");
//         } 
//       }

//       toggleCombo(true);
//     //Start!
//       initialize();

//     //Buttons

//       $("body").on("click",".dropdown-menu li a", function(){
//         event.preventDefault();

//         // change the button and action
//         if (!$("#startTurn").hasClass("disabled")) {
//           console.log("Selection made");
//           updateDropdownButton($(this).parent().parent().parent().attr("value"), $(this).text());
//         }

//       });
//       $("body").on("click", "#startTurn", function() {
//         event.preventDefault();
//         if (!$("#startTurn").hasClass("disabled")) {
//           startTurn();
//         }
//       });

//   });