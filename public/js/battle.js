$(document).ready(function() {
  //initialize
  var player = {
    movement,
    offense,
    defense
  }
  var enemy = {
    movement,
    offense,
    defense
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
  }
  function updateProgress() {
    for(i = 0; i < stats.length; i++){
      $("#"+ player.fullStats.character_id + stats[i]).attr("aria-valuenow",player.curStats[stats[i]]);
      $("#"+ enemy.fullStats.character_id + stats[i]).attr("aria-valuenow", enemy.curStats[stats[i]]);
    }
    
  }
  function initializeCharacter(id, where) {
    $.get("/api/characters/" + id, function(data) {
      console.log(where +": "+ data);
      where[fullStats] = data;
      where[fullStats][hit_points] = 5*(data.strength_point + data.speed_point);
      where[curStats] = where[fullStats];
    });
  }
  function initialize() {
    initializeCharacter( $("#player").val(), player);
    initializeCharacter( $("#enemy").val(), enemy);
    turnOrder();
  }
  //actions
  function chooseOffense (who) {
    switch(who.offense) {
      case "Restore Strength Points":
        restoreStrengthPointsFunc(who);
        break;
      case "Melee Attack":
        meleeAttackFunc(who);
        break;
      case "Melee Combo Attack":
        meleeComboAttackFunc(who);
        break;
      case "Gun Attack":
        gunAttackFunc(who);
        break;
      case "Aimed Attack":
        aimedAttackFunc(who);
        break;
      case "Reload":
        reloadFunc(who);
        break;
      default:
        break;
        //no offensive action taken

        //CHECK FOR SYNTAX - trying to get who's name and see if it matches first.
        if(who == first) {
          if (first === "enemy"){
            enemyChoice();
          } else {
            chooseOffense("player")
          }
        } else {
          endTurn();
        }
    }
  }
  function chooseMove (who) {
    switch(who.movement) {
      case "Restore Speed Points":
        restoreSpeedPointsFunc(who);
        break;
      case "Charge":
        chargeFunc(who);
        break;
      default:
    }
  }
  function enemyChoice () {
    for (i = 0; i < actionTypes.length; i++){
      //blanks it out so async functions can run all together
      enemy[actionTypes[i]] = "";
    }
    for (i = 0; i < actionTypes.length; i++){
      $.get("/api/actions/availableByType/"+actionTypes[i]+"/"+enemy.curStats.strength_point+"/"+enemy.curStats.speed_point, function(data) {
        console.log("Possible enemy actions: "+ data);
        //if data exists
        if(data[0]){
          enemy[actionTypes[i]] = (data[Math.floor(Math.random()*data.length)]);
        }
        if(actionTypes[i]="Movement"){
          //figure out turn order
          if(first === "player"){
            //player goes first
            chooseMove(player);
          } else {
            //enemy goes first
            chooseMove(enemy);
          }
        }
      });
    }
    
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
}

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
  