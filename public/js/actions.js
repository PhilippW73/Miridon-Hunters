function restoreStrength(who){
    restoreValue = Math.min((who.curStats.strength_point + 2) + Math.floor(who.fullStats.strength_point / 5), (who.fullStats.strength_point - who.curStats.strength_point));
    if(who.Movement === "Restore Speed Points"){
        restoreValue = Math.min((who.curStats.strength_point+3)+ Math.floor(who.fullStats.strength_point / 5)*2, (who.fullStats.strength_point - who.curStats.strength_point)); 
    }
    $("#comments p").text(who.fullStats.character_name + " restored" + restoreValue + " Strength Points");
}

function restoreSpeed(who){
    restoreValue = Math.min((who.curStats.speed_point + 2) + Math.floor(who.fullStats.speed_point / 5), (who.fullStats.speed_point - who.curStats.speed_point));
    if(who.Movement === "Restore Speed Points"){
        restoreValue = Math.min((who.fullStats.speed_point+3)+ Math.floor(who.fullStats.speed_point / 5)*2, (who.fullStats.speed_point - who.curStats.speed_point)); 
    }
    $("#comments p").text(who.fullStats.character_name + " restored " + restoreValue + " Speed Points");
}

function meleeAttack(who){
    who.curStats.strength_point = who.curStats.strength_point - 2;
    who.curStats.speed_point = who.curStats.speed_point - 1;
    if(window[who.opposition].Defensive = "Block"){
        var damage = Math.min((who.fullStats.strength_point - window[who.opposition].fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
        if(who.Movement != "Charge") {
            $("#comments p").append(who.fullStats.character_name + " charged.")
            damage = damage + 2;
        }
        window[who.opposition].hitPoint =  window[who.opposition].hitPoint - damage;
        $("#comments p").append(window[who.opposition].fullStats.character_name + " blocked "+who.fullStats.character_name+"'s attack and got dealt " + damage + " damage.");
    } else if(window[who.opposition].Defensive = "Dodge" && (window[who.opposition].fullStats.speed_point - who.fullStats.speed_point + Math.floor(Math.random()*6)+1 > 4)){
        //opposition dodges
        $("#comments p").append(who.fullStats.character_name + " missed due to "+window[who.opposition].fullStats.character_name+" dodging.");
    } else {
        //no defense
        var damage = Math.min((who.fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
        window[who.opposition].hitPoint =  window[who.opposition].hitPoint - damage;
        if(who.Movement != "Charge") {
            $("#comments p").append(who.fullStats.character_name + " charged.")
            damage = damage + 2;
        }
        $("#comments p").append(who.fullStats.character_name+"'s attack dealt " + damage + " damage to "+window[who.opposition].fullStats.character_name+".");
    }
    $(".dropdown-menu :contains('Melee Combo Attack')").removeClass("disabled");
}

function meleeCombo(who){
    who.curStats.strength_point = who.curStats.strength_point - 1;
    who.curStats.speed_point = who.curStats.speed_point - 2;
    if(window[who.opposition].Defensive = "Block"){
        var damage = Math.min((who.fullStats.strength_point - window[who.opposition].fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
        if(who.Movement != "Charge") {
            $("#comments p").append(who.fullStats.character_name + " charged.")
            damage = damage + 2;
        }
        window[who.opposition].hitPoint =  window[who.opposition].hitPoint - damage;
        $("#comments p").append(window[who.opposition].fullStats.character_name + " blocked "+who.fullStats.character_name+"'s attack and got dealt " + damage + " damage.");
    } else if(window[who.opposition].Defensive = "Dodge" && (window[who.opposition].fullStats.speed_point - who.fullStats.speed_point + Math.floor(Math.random()*6)+1 > 4)){
        //opposition dodges
        $("#comments p").append(who.fullStats.character_name + " missed due to "+window[who.opposition].fullStats.character_name+" dodging.");
    } else {
        //no defense
        var damage = Math.min((who.fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
        window[who.opposition].hitPoint =  window[who.opposition].hitPoint - damage;
        if(who.Movement != "Charge") {
            $("#comments p").append(who.fullStats.character_name + " charged.")
            damage = damage + 2;
        }
        $("#comments p").append(who.fullStats.character_name+"'s attack dealt " + damage + " damage to "+window[who.opposition].fullStats.character_name+".");
    }
    $(".dropdown-menu :contains('Melee Combo Attack')").removeClass("disabled");
}

function gunAttack(who){
    if(who === 0){
        if(block){
            enemy.hitPoint =  enemy.hitPoint - (Math.floor(Math.random()*6)+1) - 3
            player.speed = player.speed - 2
            $("#comments p").text("Player's shot dealt" + enemy.hitPoint - (Math.floor(Math.random()*6)+1) - 3 + " damage due to enemy block");
        }
        if(dodge){
            enemy.hitPoint =  enemy.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1))
            player.speed = player.speed - 2
            $("#comments p").text("Player's shot dealt" + enemy.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1)) + " damage due to enemy dodge");
        }
        enemy.hitPoint = enemy.hitPoint - Math.floor(Math.random()*6)+1
        player.speed = player.speed - 2
        $("#comments p").text("Player's shot dealt" + enemy.hitPoint - Math.floor(Math.random()*6)+1 + " damage");
        
    }
    if(who === 1){
        if(block){
            player.hitPoint =  player.hitPoint - (Math.floor(Math.random()*6)+1) - 3
            enemy.speed = enemy.speed - 2
            $("#comments p").text("Enemy's shot dealt" + player.hitPoint - (Math.floor(Math.random()*6)+1) - 3 + " damage due to player block");
        }
        if(dodge){
            player.hitPoint =  player.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1))
            enemy.speed = enemy.speed - 2
            $("#comments p").text("Enemy's shot dealt" + player.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1)) + " damage due to player dodge");
        }
        player.hitPoint = player.hitPoint - Math.floor(Math.random()*6)+1
        enemy.speed = enemy.speed - 2
        $("#comments p").text("Enemy's shot dealt" + player.hitPoint - Math.floor(Math.random()*6)+1 + " damage");
        
    }
}

function aimedAttack(who){
    if(who === 0){
        if(block){
            enemy.hitPoint =  enemy.hitPoint - (Math.floor(Math.random()*6)+3) - 3
            player.speed = player.speed - 3
            $("#comments p").text("Player's aimed shot dealt" + enemy.hitPoint - (Math.floor(Math.random()*6)+1) - 3 + " damage due to enemy block");
        }
        if(dodge){
            enemy.hitPoint =  enemy.hitPoint - ((Math.floor(Math.random()*6)+3) - (Math.floor(Math.random()*6)+1))
            player.speed = player.speed - 3
            $("#comments p").text("Player's aimed shot dealt" + enemy.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1)) + " damage due to enemy dodge");
        }
        enemy.hitPoint = enemy.hitPoint - Math.floor(Math.random()*6)+3
        player.speed = player.speed - 3
        $("#comments p").text("Player's aimed shot dealt" + enemy.hitPoint - Math.floor(Math.random()*6)+3 + " damage");
        
    }
    if(who === 1){
        if(block){
            player.hitPoint =  player.hitPoint - (Math.floor(Math.random()*6)+3) - 3
            $("#comments p").text("Enemy's aimed shot dealt" + player.hitPoint - (Math.floor(Math.random()*6)+1) - 3 + " damage due to player block");
        }
        if(dodge){
            player.hitPoint =  player.hitPoint - ((Math.floor(Math.random()*6)+3) - (Math.floor(Math.random()*6)+1))
            enemy.speed = enemy.speed - 3
            $("#comments p").text("Enemy's aimed shot dealt" + player.hitPoint - ((Math.floor(Math.random()*6)+1) - (Math.floor(Math.random()*6)+1)) + " damage due to player dodge");
        }
        player.hitPoint = player.hitPoint - Math.floor(Math.random()*6)+3
        enemy.speed = enemy.speed - 3
        $("#comments p").text("Enemy's aimed shot dealt" + player.hitPoint - Math.floor(Math.random()*6)+3 + " damage");
        
    }
}

//function reload(who, func){

//}
