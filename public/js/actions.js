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
    $("#comments p").text(who.fullStats.character_name + " restored" + restoreValue + " Speed Points");
}

function meleeAttack(who){
    who.curStats.strength_point = who.curStats.strength_point - 2;
    who.curStats.speed_point = who.curStats.speed_point - 1;
    if(window[who.opposition].Defensive = "Block"){
        var damage = Math.max((who.fullStats.strength_point - window[who.opposition].fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
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
 master
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
        var damage = Math.max((who.fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);

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
    who.curStats.speed_point = who.curStats.speed_point - 1;
    if(window[who.opposition].Defensive = "Block"){
        var damage = Math.max((who.fullStats.strength_point - window[who.opposition].fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
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
        var damage = Math.max((who.fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
        window[who.opposition].hitPoint =  window[who.opposition].hitPoint - damage;
        if(who.Movement != "Charge") {
            $("#comments p").append(who.fullStats.character_name + " charged.")
            damage = damage + 2;
        }
        $("#comments p").append(who.fullStats.character_name+"'s attack dealt " + damage + " damage to "+window[who.opposition].fullStats.character_name+".");
    }
}

function aimedAttack(who){
    who.curStats.speed_point = who.curStats.speed_point - 3;
    if(window[who.opposition].Defensive = "Block"){
        var damage = Math.max((who.fullStats.strength_point - window[who.opposition].fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2)+3, 0);
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
        var damage = Math.max((who.fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2)+3, 0);
        window[who.opposition].hitPoint =  window[who.opposition].hitPoint - damage;
        if(who.Movement != "Charge") {
            $("#comments p").append(who.fullStats.character_name + " charged.")
            damage = damage + 2;
        }
        $("#comments p").append(who.fullStats.character_name+"'s attack dealt " + damage + " damage to "+window[who.opposition].fullStats.character_name+".");
    }
}    

//function reload(who, func){

//}
