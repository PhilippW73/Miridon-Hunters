import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../components/Image";
import Chat from "../components/Chat";
import Navbar from "../components/Navbar";
import Input from "../components/Input";
import Row from "../components/Row";
import Column from "../components/Colmun";
import Greeting from "../components/Greeting";
import Wins_Losses from "../components/Wins_Losses";




<<<<<<< HEAD
export default Battle;
=======
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
    actionTypes: [],
    first: "",
    meleeCombo: false,
    actionsDisabled: false;
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
        this.getActionTypes();
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
        this.getActions("player", this.getEnemy);
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
        this.initiative();
        this.getActions("enemy", );
      })
      .catch(err => console.log(err));
  }

  getActions(who, callback) {
    //sends id based on who
    const id = this.state.eval(who).fullStats.character_id;
    const strength = this.state.eval(who).curStats.strength_point;
    const speed = this.state.eval(who).curStats.speed_point;
    mongo.getActions(id, strength, speed)
      .then(res => {
        let temp = this.state.eval(who);
        temp.actions = res.data.message;
        this.setState({
          [who].actions.Offensive: temp.Offensive,
          [who].actions.Movement: temp.Movement,
          [who].actions.Defensive: temp.Defensive
        })
      })
      .catch(err => console.log(err));
    if(callback && typeof callback === "function"){
      callback();
    }
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

  //battle order functions
    //actions
    function chooseOffense (input) {
      console.log(input+" is attacking");
      let who = this.state.eval(input);
      let target = this.state.eval(this.state.eval(input).opposition);
      let results = {};
      switch(who.Offensive) {
        case "Restore Strength Points":
          results = restoreStrength(who);
          break;
        case "Melee Attack":
          results = meleeAttack(who, target);
          if (input === "player"){
            this.setState({meleeCombo: true});
          }
          break;
        case "Melee Combo Attack":
          results = meleeCombo(who, target);
          if (input === "player"){
            this.setState({meleeCombo: true});
          }
          break;
        case "Gun Attack":
          results = gunAttack(who, target);
          break;
        case "Aimed Attack":
          results = aimedAttack(who, target);
          break;
        case "Reload":
          results = reload(who, target);
          break;
        default:
          break;
      }
      this.setState({
        [input]: results.who,
        [who.opposition]: results.target,
        comments: this.state.comments + results.comment
      });
      //CHECK FOR SYNTAX - trying to get who's name and see if it matches first.
      console.log("Ready for next turn part.");
      console.log("--------------------");
      console.log(input);
      console.log(first);
      if(input === first) {
        this.checkDead(who.opposition, this.chooseMove);
      } else {
        this.checkDead(who.opposition, this.endTurn);
      }
    }

    function chooseDefense (input) {
      console.log(input+" is defending");
      let who = this.state.eval(input);
      let target = this.state.eval(this.state.eval(input).opposition);
      let results = {};
      switch(who.Defensive) {
        case "Dodge":
          results = dodge(who);
          break;
        case "Block":
          results = block(who);
          break;
        default:
          break;
      }
      this.setState({
        [input]: results.who,
        comments: this.state.comments + results.comment
      });
    }
    function chooseMove (input) {
      console.log(input+" is moving");
      let who = this.state.eval(input);
      let target = this.state.eval(this.state.eval(input).opposition);
      let results = {};
      switch(who.Movement) {
        case "Restore Speed Points":
          results = restoreSpeed(who);
          break;
        case "Charge":
          results = charge(who);
          break;
        default:
          break;
      }
      this.setState({
        [input]: results.who,
        comments: this.state.comments + results.comment
      });
      chooseDefense(who.opposition);
      chooseOffense(input);
    }
  //Enemy Choice
    function enemyChoice(){
      this.getActions("enemy", () =>{
        this.setState({
          enemy.Offensive: (this.state.enemy.actions.Offensive[Math.floor(Math.random()*this.state.enemy.actions.Offensive.length + 1 )]),
          enemy.Movement: (this.state.enemy.actions.Movement[Math.floor(Math.random()*this.state.enemy.actions.Movement.length + 1 )]),
          enemy.Defensive: (this.state.enemy.actions.Defensive[Math.floor(Math.random()*this.state.enemy.actions.Defensive.length + 1 )])
        });
        console.log("Enemy choices:"+this.state.enemy.Movement+this.state.enemy.Offensive+this.state.enemy.Defensive);
        if(this.state.first === "player"){
          //player goes first
          this.chooseMove("player");
        } else {
          //enemy goes first
          this.chooseMove("enemy");
        }
      });
    }

  function checkDead (who, func) {
    if(this.state.eval(who).curStats.hit_point < 1) {
      $(".dropdown-toggle").addClass("disabled");
      $("#startTurn").addClass("disabled");
      if (who === "player") {
        //lose
        this.setState({comments: this.state.comments + " You lost the battle."});
        mongo.charLose(this.state.player.character_id);
        mongo.charWin(this.state.enemy.character_id);
        mongo.playerLose(id);
      } else {
        //win
        this.setState({comments: this.state.comments + " You won the battle!"});
        mongo.charWin(this.state.player.character_id);
        mongo.charLose(this.state.enemy.character_id);
        mongo.playerWin(id);
      }
    } else {
      func(who);
    }
  }

  function endTurn () {
    console.log("Turn end");
    //set buttons back to normal
    this.setState({
      actionsDisabled: false
    });
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
              {props.actionTypes.map(actionType => <ButtonDropdown actionType actions strength={this.state.player.curStats.strength_point} speed={this.state.player.curStats.speed_point} weapon={this.state.player.fullStats.weapon} current={this.state.player[actionType.name]} meleeCombo actionsDisabled/>
                )}
              <button class="btn btn-default" type="button" id="startTurn" onClick={this.handleActionChange} { this.state.actionsDisabled ? "disabled" : "" }>Start Turn
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

>>>>>>> 0d77621220dd9365c20ee2ad329915dd1b2a5a49
