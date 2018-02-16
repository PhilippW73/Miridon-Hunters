import React, {
    Component
} from "react";
import API from "../utils/API";
import Container from "../components/Container";
// import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
// import Alert from "../components/Alert";

//Things needed: mongo, header, footer, player area...
import header from "../components/header";
import footer from "../components/footer";

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
        stats: ["hit_point","strength_point", "speed_point","ghost_hp"],
        first: "",
        comments: ""
    };

//       var stats = ["hit_point","strength_point", "speed_point","ghost_hp"];
//       var actionTypes = ["Offensive","Defensive","Movement"];
//       var first;
    // When the component mounts, get a list of all available base breeds and update this.state.breeds
    componentDidMount() {
        //how are we getting the id?
        //First time: get character, action types, actions
        this.getCharacter();
    }

    getCharacter() {
        mongo.getCharacter({
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
        mongo.getCharacterByWins(randEnemy)
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


    handleInputChange = event => {
        this.setState({
            search: event.target.value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        API.getDogsOfBreed(this.state.search)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({
                    results: res.data.message,
                    error: ""
                });
            })
            .catch(err => this.setState({
                error: err.message
            }));
    };

    render() {
        return ( 
        <Container>
            <header />
            <footer />
        </Container>
        );
    }
}

export default Battle;


//       function restoreStrength(who){
//           restoreValue = Math.min((eval(who).curStats.strength_point + 2) + Math.floor(eval(who).fullStats.strength_point / 5), (eval(who).fullStats.strength_point - eval(who).curStats.strength_point));
//           if(eval(who).Movement === "Restore Speed Points"){
//               restoreValue = Math.min((eval(who).curStats.strength_point+3)+ Math.floor(eval(who).fullStats.strength_point / 5)*2, (eval(who).fullStats.strength_point - eval(who).curStats.strength_point)); 
//           }
//           $("#comments p").append(eval(who).fullStats.character_name + " restored" + restoreValue + " Strength Points. ");
//           eval(who).curStats.strength_point += restoreValue;
//       }

//       function restoreSpeed(who){
//           restoreValue = Math.min((eval(who).curStats.speed_point + 2) + Math.floor(eval(who).fullStats.speed_point / 5), (eval(who).fullStats.speed_point - eval(who).curStats.speed_point));
//           if(eval(who).Movement === "Restore Speed Points"){
//               restoreValue = Math.min((eval(who).fullStats.speed_point+3)+ Math.floor(eval(who).fullStats.speed_point / 5)*2, (eval(who).fullStats.speed_point - eval(who).curStats.speed_point)); 
//           }
//           $("#comments p").append(eval(who).fullStats.character_name + " restored " + restoreValue + " Speed Points. ");
//           eval(who).curStats.speed_point += restoreValue;
//       }

//       function meleeAttack(who){
//         console.log("Melee attack by "+who);
//           if(eval(who).curStats.strength_point < 2 || eval(who).curStats.speed_point < 1) {
//               $("#comments p").append(eval(who).fullStats.character_name+" did not have enough energy to attack. They attempt to gather strength. ");
//               restoreStrength(who);
//           } else {
//               eval(who).curStats.strength_point = eval(who).curStats.strength_point - 2;
//               eval(who).curStats.speed_point = eval(who).curStats.speed_point - 1;
//               if(eval(eval(who).opposition).Defensive = "Block"){
//                   var damage = Math.max((eval(who).fullStats.strength_point - eval(eval(who).opposition).fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
//                   if(eval(who).Movement != "Charge") {
//                       damage = damage + 2;
//                   }
//                   eval(eval(who).opposition).curStats.hit_point =  eval(eval(who).opposition).curStats.hit_point - damage;
//                   $("#comments p").append(eval(eval(who).opposition).fullStats.character_name + " blocked "+eval(who).fullStats.character_name+"'s attack and got dealt " + damage + " damage. ");
//               } else if(eval(eval(who).opposition).Defensive = "Dodge" && (eval(eval(who).opposition).fullStats.speed_point - eval(who).fullStats.speed_point + Math.floor(Math.random()*6)+1 > 4)){
//                   //opposition dodges
//                   $("#comments p").append(eval(who).fullStats.character_name + " missed due to "+eval(eval(who).opposition).fullStats.character_name+" dodging. ");
//               } else {
//                   //no defense
//                   var damage = Math.max((eval(who).fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
//                   eval(eval(who).opposition).curStats.hit_point =  eval(eval(who).opposition).curStats.hit_point - damage;
//                   if(eval(who).Movement != "Charge") {
//                       damage = damage + 2;
//                   }
//                   $("#comments p").append(eval(who).fullStats.character_name+"'s attack dealt " + damage + " damage to "+eval(eval(who).opposition).fullStats.character_name+". ");
//               }
//               toggleCombo(false);
//           }
//       }

//       function meleeCombo(who){
//           if(eval(who).curStats.strength_point < 1 || eval(who).curStats.speed_point < 2) {
//               $("#comments p").append(eval(who).fullStats.character_name+" did not have enough energy to attack. They attempt to gather strength. ");
//               restoreStrength(who);
//           } else {
//               eval(who).curStats.strength_point = eval(who).curStats.strength_point - 1;
//               eval(who).curStats.speed_point = eval(who).curStats.speed_point - 2;
//               if(eval(eval(who).opposition).Defensive = "Block"){
//                   var damage = Math.max((eval(who).fullStats.strength_point - eval(eval(who).opposition).fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
//                   if(eval(who).Movement != "Charge") {
//                       damage = damage + 2;
//                   }
//                   eval(eval(who).opposition).curStats.hit_point =  eval(eval(who).opposition).curStats.hit_point - damage;
//                   $("#comments p").append(eval(eval(who).opposition).fullStats.character_name + " blocked "+eval(who).fullStats.character_name+"'s attack and got dealt " + damage + " damage. ");
//               } else if(eval(eval(who).opposition).Defensive = "Dodge" && (eval(eval(who).opposition).fullStats.speed_point - eval(who).fullStats.speed_point + Math.floor(Math.random()*6)+1 > 4)){
//                   //opposition dodges
//                   $("#comments p").append(eval(who).fullStats.character_name + " missed due to "+eval(eval(who).opposition).fullStats.character_name+" dodging. ");
//               } else {
//                   //no defense
//                   var damage = Math.max((eval(who).fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
//                   eval(eval(who).opposition).curStats.hit_point =  eval(eval(who).opposition).curStats.hit_point - damage;
//                   if(eval(who).Movement != "Charge") {
//                       damage = damage + 2;
//                   }
//                   $("#comments p").append(eval(who).fullStats.character_name+"'s attack dealt " + damage + " damage to "+eval(eval(who).opposition).fullStats.character_name+". ");
//               }
//               toggleCombo(false);
//           }
//       }

//       function gunAttack(who){
//           eval(who).curStats.speed_point = eval(who).curStats.speed_point - 1;
//           if(eval(eval(who).opposition).Defensive = "Block"){
//               var damage = Math.max((eval(who).fullStats.strength_point - eval(eval(who).opposition).fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
//               if(eval(who).Movement != "Charge") {
//                   $("#comments p").append(eval(who).fullStats.character_name + " charged.")
//                   damage = damage + 2;
//               }
//               eval(eval(who).opposition).curStats.hit_point =  eval(eval(who).opposition).curStats.hit_point - damage;
//               $("#comments p").append(eval(eval(who).opposition).fullStats.character_name + " blocked "+eval(who).fullStats.character_name+"'s attack and got dealt " + damage + " damage.");
//           } else if(eval(eval(who).opposition).Defensive = "Dodge" && (eval(eval(who).opposition).fullStats.speed_point - eval(who).fullStats.speed_point + Math.floor(Math.random()*6)+1 > 4)){
//               //opposition dodges
//               $("#comments p").append(eval(who).fullStats.character_name + " missed due to "+eval(eval(who).opposition).fullStats.character_name+" dodging.");
//           } else {
//               //no defense
//               var damage = Math.max((eval(who).fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
//               eval(eval(who).opposition).curStats.hit_point =  eval(eval(who).opposition).curStats.hit_point - damage;
//               if(eval(who).Movement != "Charge") {
//                   $("#comments p").append(eval(who).fullStats.character_name + " charged.")
//                   damage = damage + 2;
//               }
//               $("#comments p").append(eval(who).fullStats.character_name+"'s attack dealt " + damage + " damage to "+eval(eval(who).opposition).fullStats.character_name+".");
//           }
//       }

//       function aimedAttack(who){
//           eval(who).curStats.speed_point = eval(who).curStats.speed_point - 3;
//           if(eval(eval(who).opposition).Defensive = "Block"){
//               var damage = Math.max((eval(who).fullStats.strength_point - eval(eval(who).opposition).fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2)+3, 0);
//               if(eval(who).Movement != "Charge") {
//                   $("#comments p").append(eval(who).fullStats.character_name + " charged.")
//                   damage = damage + 2;
//               }
//               eval(eval(who).opposition).curStats.hit_point =  eval(eval(who).opposition).curStats.hit_point - damage;
//               $("#comments p").append(eval(eval(who).opposition).fullStats.character_name + " blocked "+eval(who).fullStats.character_name+"'s attack and got dealt " + damage + " damage.");
//           } else if(eval(eval(who).opposition).Defensive = "Dodge" && (eval(eval(who).opposition).fullStats.speed_point - eval(who).fullStats.speed_point + Math.floor(Math.random()*6)+1 > 4)){
//               //opposition dodges
//               $("#comments p").append(eval(who).fullStats.character_name + " missed due to "+eval(eval(who).opposition).fullStats.character_name+" dodging.");
//           } else {
//               //no defense
//               var damage = Math.max((eval(who).fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2)+3, 0);
//               eval(eval(who).opposition).curStats.hit_point =  eval(eval(who).opposition).curStats.hit_point - damage;
//               if(eval(who).Movement != "Charge") {
//                   $("#comments p").append(eval(who).fullStats.character_name + " charged.")
//                   damage = damage + 2;
//               }
//               $("#comments p").append(eval(who).fullStats.character_name+"'s attack dealt " + damage + " damage to "+eval(eval(who).opposition).fullStats.character_name+".");
//           }
//       }    

//       //function reload(who, func){

//       //}
//       function charge(who) {
//           if(eval(who).curStats.speed_point > 0 ) {
//               eval(who).curStats.speed_point--;
//               $("#comments p").append(eval(who).fullStats.character_name + " charged. ");
//           } else {
//               $("#comments p").append(eval(who).fullStats.character_name+" did not have enough strength to charge. They attempt to gather speed. ");
//               restoreSpeed(who);
//           }
//       }

//       function block(who) {
//           if(eval(who).curStats.strength_point > 1 ) {
//               eval(who).curStats.strength_point = eval(who).curStats.strength_point - 2;
//               $("#comments p").append(eval(who).fullStats.character_name + " blocked. ");
//           } else {
//               $("#comments p").append(eval(who).fullStats.character_name+" did not have enough strength to block. ");
//           }
//       }

//       function dodge(who) {
//           if(eval(who).curStats.speed_point > 0 ) {
//               eval(who).curStats.speed_point--;
//               $("#comments p").append(eval(who).fullStats.character_name + " attempted to dodge. ");
//           } else {
//               $("#comments p").append(eval(who).fullStats.character_name+" did not have enough speed to dodge. ");
//           }
//       }
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