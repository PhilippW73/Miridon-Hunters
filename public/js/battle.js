$(document).ready(function() {
  //initialize
  var player = {
    name: "player",
    opposition: "enemy",
    movement: "",
    Offensive: "",
    Defensive: ""
  }
  var enemy = {
    name: "enemy",
    opposition: "player",
    Movement: "",
    Offensive: "",
    Defensive: ""
  }
  var stats = ["hit_points","strength_point", "speed_point","ghost_hp"];
  var actionTypes = ["Offensive","Defensive","Movement"];
  var first;

  function turnOrder() {
    if (player.fullStats.speed_point > enemy.fullStats.speed_point) {
      first = "player";
    } else if (player.fullStats.speed_point < enemy.fullStats.speed_point || Math.random()<.5 ) {
      first = "enemy";
    } else {
      first = "player";
    }
    updateProgress();
  }
  function initializeCharacter(id, where, func) {
    $.get("/api/characters/" + id, function(data) {
      console.log(JSON.stringify(where) +": "+ JSON.stringify(data));
      where.fullStats = data;
      console.log(where.fullStats);
      where.fullStats.hit_point = 5*(data.strength_point + data.speed_point);
      where.curStats = where.fullStats;
      func();
    });
  }
  function updateProgress() {
    for(i = 0; i < stats.length; i++){
      $("#"+ player.fullStats.character_id + stats[i]).attr("aria-valuenow",player.curStats[stats[i]]);
      $("#"+ player.fullStats.character_id + stats[i]).css('width',player.curStats[stats[i]]/player.fullStats[stats[i]]);
      $("#"+ enemy.fullStats.character_id + stats[i]).attr("aria-valuenow", enemy.curStats[stats[i]]);
      $("#"+ enemy.fullStats.character_id + stats[i]).css('width',enemy.curStats[stats[i]]/enemy.fullStats[stats[i]]);
    }
    
  }
  function initialize() {
    console.log("Initalizing "+ $("#player").attr('value') + " as player.");
    initializeCharacter( $("#player").attr('value'), player, initialize2);
  }
  function initialize2() {
    console.log("Initalizing "+$("#enemy").attr('value') + " as enemy.");
    initializeCharacter( $("#enemy").attr('value'), enemy, turnOrder);
  }
  //actions
  function chooseOffense (who) {
    switch(who.Offensive) {
      case "Restore Strength Points":
        restoreStrength(who);
        break;
      case "Melee Attack":
        meleeAttack(who);
        break;
      case "Melee Combo Attack":
        meleeComboAttack(who);
        break;
      case "Gun Attack":
        gunAttack(who);
        break;
      case "Aimed Attack":
        aimedAttack(who);
        break;
      // case "Reload":
      //   reloadFunc(who);
      //   break;
      default:
        break;
        //no offensive action taken

        //CHECK FOR SYNTAX - trying to get who's name and see if it matches first.
        if(who.name === first) {
          if (first === "enemy"){
            enemyChoice();
          } else {
            chooseMove("player");
          }
        } else {
          endTurn();
        }
    }
  }
  function chooseDefense (who) {
    switch(who.Movement) {
      case "Dodge":
        dodge(who);
        break;
      case "Block":
        block(who);
        break;
      default:
        break;
    }
  }
  function chooseMove (who) {
    switch(who.Movement) {
      case "Restore Speed Points":
        restoreSpeed(who);
        break;
      case "Charge":
        charge(who);
        break;
      default:
        break;
    }
    chooseDefense(window[who]);
    chooseOffense(who);
  }
  function enemyChoice () {
    for (i = 0; i < actionTypes.length; i++){
      //blanks it out so async functions can run all together
      enemy[actionTypes[i]] = "";
    }
    var promises;
    for (i = 0; i < actionTypes.length; i++){
      promises[i] = $.get("/api/actions/availableByType/"+actionTypes[i]+"/"+enemy.curStats.strength_point+"/"+enemy.curStats.speed_point, function(data) {
        console.log("Possible enemy actions: "+ data);
        //if data exists
        if(data[0]){
          enemy[actionTypes[i]] = (data[Math.floor(Math.random()*data.length)]);
        }
        // if(actionTypes[i]="Movement"){
        //   //figure out turn order
          
        // }
      });
    }
    // await Promise.all(promises);

    // var promise1 = Promise.resolve(3);
    // var promise2 = 42;
    // var promise3 = new Promise(function(resolve, reject) {
    //   setTimeout(resolve, 100, 'foo');
    // });

    Promise.all(promises).then(function(values) {
      console.log("Finished:"+enemy.Movement+enemy.Offensive+enemy.Defensive);
      if(first === "player"){
        //player goes first
        chooseMove(player);
      } else {
        //enemy goes first
        chooseMove(enemy);
      }
    });
    
    
  }
  function updateDropdownButton (type, newValue) {
    updateAction(player, type, newValue)
    if(!newValue){
      newValue = type;
    }
    $("#"+type+"Dropdown").text(newValue);
  }
  function updateAction (who, type, newValue) {
    who[type.toLowerCase()] = newValue;
  }
  function startTurn () {
    //disable dropdowns
    $(".dropdown-toggle").addClass("disabled");
    //enemy selects
    $(".dropdown-menu :contains('Melee Combo Attack')").addClass("disabled");
    $("#comments p").text("");
    enemyChoice();
    
  }
  function endTurn () {

    //set buttons back to normal
    for (i = 0; i < actionTypes.length; i++){
      updateDropdownButton(actionTypes[i])
    }
    //enable dropdowns
    $(".dropdown-toggle").removeClass("disabled");
  }
  function checkDead (who, func) {
    if(who.curStats.hit_points < 1) {
      $(".dropdown-toggle").addClass("disabled");
      $("#startTurn").addClass("disabled");
      if (who.name === "player") {
        //lose
        $("#comments p").append(" You lost the battle.");
      } else {
        //win
        $("#comments p").append(" You won the battle!");
      }
    } else {
      func();
    }
  }

  initialize();

  // ---------------------------------------------------
  //Buttons
  // ---------------------------------------------------


  //update names after selecting from dropdown
  $("body").on("click", ".dropdown-menu li", function(){
    //updates the name
    updateDropdownButton($(this).parent().val(), $(this).text());
  });
  
  $("body").on("click", "#startTurn", function() {
    startTurn();
  });


  
  //Enemy turn + defensive actions
  //Win/lose
});

// Makes sure all stats are set to max at start of combat
// Reads offensive action from buttons, applies it
// Enemy phase


// Code from cat activity:
// $(function() {
  //   $(".change-sleep").on("click", function(event) {
  //     var id = $(this).data("id");
  //     var newSleep = $(this).data("newsleep");
  
  //     var newSleepState = {
  //       sleepy: newSleep
  //     };
  
  //     // Send the PUT request.
  //     $.ajax("/api/cats/" + id, {
  //       type: "PUT",
  //       data: newSleepState
  //     }).then(
  //       function() {
  //         console.log("changed sleep to", newSleep);
  //         // Reload the page to get the updated list
  //         location.reload();
  //       }
  //     );
  //   });
  
  //   $(".create-form").on("submit", function(event) {
  //     // Make sure to preventDefault on a submit event.
  //     event.preventDefault();
  
  //     var newCat = {
  //       name: $("#ca").val().trim(),
  //       sleepy: $("[name=sleepy]:checked").val().trim()
  //     };
  
  //     // Send the POST request.
  //     $.ajax("/api/cats", {
  //       type: "POST",
  //       data: newCat
  //     }).then(
  //       function() {
  //         console.log("created new cat");
  //         // Reload the page to get the updated list
  //         location.reload();
  //       }
  //     );
  //   });
  
  //   $(".delete-cat").on("click", function(event) {
  //     var id = $(this).data("id");
  
  //     // Send the DELETE request.
  //     $.ajax("/api/cats/" + id, {
  //       type: "DELETE",
  //     }).then(
  //       function() {
  //         console.log("deleted cat", id);
  //         // Reload the page to get the updated list
  //         location.reload();
  //       }
  //     );
  //   });
  // });
  