//This is for using modules.export, but did not seem to work...
var ActionFunc = {};

ActionFunc.restoreStrength = function(who){
    restoreValue = Math.min((eval(who).curStats.strength_point + 2) + Math.floor(eval(who).fullStats.strength_point / 5), (eval(who).fullStats.strength_point - eval(who).curStats.strength_point));
    if(eval(who).Movement === "Restore Speed Points"){
        restoreValue = Math.min((eval(who).curStats.strength_point+3)+ Math.floor(eval(who).fullStats.strength_point / 5)*2, (eval(who).fullStats.strength_point - eval(who).curStats.strength_point)); 
    }
    $("#comments p").text(eval(who).fullStats.character_name + " restored" + restoreValue + " Strength Points. ");
}

ActionFunc.restoreSpeed = function(who){
    restoreValue = Math.min((eval(who).curStats.speed_point + 2) + Math.floor(eval(who).fullStats.speed_point / 5), (eval(who).fullStats.speed_point - eval(who).curStats.speed_point));
    if(eval(who).Movement === "Restore Speed Points"){
        restoreValue = Math.min((eval(who).fullStats.speed_point+3)+ Math.floor(eval(who).fullStats.speed_point / 5)*2, (eval(who).fullStats.speed_point - eval(who).curStats.speed_point)); 
    }
    $("#comments p").text(eval(who).fullStats.character_name + " restored " + restoreValue + " Speed Points. ");
}

ActionFunc.meleeAttack = function(who){
    if(eval(who).curStats.strength_point < 2 || eval(who).curStats.speed_point < 1) {
        $("#comments p").append(eval(who).fullStats.character_name+" did not have enough energy to attack. They attempt to gather strength. ");
        restoreStrength(who);
    } else {
        eval(who).curStats.strength_point = eval(who).curStats.strength_point - 2;
        eval(who).curStats.speed_point = eval(who).curStats.speed_point - 1;
        if(window[eval(who).opposition].Defensive = "Block"){
            var damage = Math.max((eval(who).fullStats.strength_point - window[eval(who).opposition].fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
            if(eval(who).Movement != "Charge") {
                damage = damage + 2;
            }
            window[eval(who).opposition].hitPoint =  window[eval(who).opposition].hitPoint - damage;
            $("#comments p").append(window[eval(who).opposition].fullStats.character_name + " blocked "+eval(who).fullStats.character_name+"'s attack and got dealt " + damage + " damage. ");
        } else if(window[eval(who).opposition].Defensive = "Dodge" && (window[eval(who).opposition].fullStats.speed_point - eval(who).fullStats.speed_point + Math.floor(Math.random()*6)+1 > 4)){
            //opposition dodges
            $("#comments p").append(eval(who).fullStats.character_name + " missed due to "+window[eval(who).opposition].fullStats.character_name+" dodging. ");
        } else {
            //no defense
            var damage = Math.max((eval(who).fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
            window[eval(who).opposition].hitPoint =  window[eval(who).opposition].hitPoint - damage;
            if(eval(who).Movement != "Charge") {
                damage = damage + 2;
            }
            $("#comments p").append(eval(who).fullStats.character_name+"'s attack dealt " + damage + " damage to "+window[eval(who).opposition].fullStats.character_name+". ");
        }
        $(".dropdown-menu :contains('Melee Combo Attack')").removeClass("disabled");
    }
}

ActionFunc.meleeCombo = function(who){
    if(eval(who).curStats.strength_point < 1 || eval(who).curStats.speed_point < 2) {
        $("#comments p").append(eval(who).fullStats.character_name+" did not have enough energy to attack. They attempt to gather strength. ");
        restoreStrength(who);
    } else {
        eval(who).curStats.strength_point = eval(who).curStats.strength_point - 1;
        eval(who).curStats.speed_point = eval(who).curStats.speed_point - 2;
        if(window[eval(who).opposition].Defensive = "Block"){
            var damage = Math.max((eval(who).fullStats.strength_point - window[eval(who).opposition].fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
            if(eval(who).Movement != "Charge") {
                damage = damage + 2;
            }
            window[eval(who).opposition].hitPoint =  window[eval(who).opposition].hitPoint - damage;
            $("#comments p").append(window[eval(who).opposition].fullStats.character_name + " blocked "+eval(who).fullStats.character_name+"'s attack and got dealt " + damage + " damage. ");
        } else if(window[eval(who).opposition].Defensive = "Dodge" && (window[eval(who).opposition].fullStats.speed_point - eval(who).fullStats.speed_point + Math.floor(Math.random()*6)+1 > 4)){
            //opposition dodges
            $("#comments p").append(eval(who).fullStats.character_name + " missed due to "+window[eval(who).opposition].fullStats.character_name+" dodging. ");
        } else {
            //no defense
            var damage = Math.max((eval(who).fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
            window[eval(who).opposition].hitPoint =  window[eval(who).opposition].hitPoint - damage;
            if(eval(who).Movement != "Charge") {
                damage = damage + 2;
            }
            $("#comments p").append(eval(who).fullStats.character_name+"'s attack dealt " + damage + " damage to "+window[eval(who).opposition].fullStats.character_name+". ");
        }
        $(".dropdown-menu :contains('Melee Combo Attack')").removeClass("disabled");
    }
}

ActionFunc.gunAttack = function(who){
    eval(who).curStats.speed_point = eval(who).curStats.speed_point - 1;
    if(window[eval(who).opposition].Defensive = "Block"){
        var damage = Math.max((eval(who).fullStats.strength_point - window[eval(who).opposition].fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
        if(eval(who).Movement != "Charge") {
            $("#comments p").append(eval(who).fullStats.character_name + " charged.")
            damage = damage + 2;
        }
        window[eval(who).opposition].hitPoint =  window[eval(who).opposition].hitPoint - damage;
        $("#comments p").append(window[eval(who).opposition].fullStats.character_name + " blocked "+eval(who).fullStats.character_name+"'s attack and got dealt " + damage + " damage.");
    } else if(window[eval(who).opposition].Defensive = "Dodge" && (window[eval(who).opposition].fullStats.speed_point - eval(who).fullStats.speed_point + Math.floor(Math.random()*6)+1 > 4)){
        //opposition dodges
        $("#comments p").append(eval(who).fullStats.character_name + " missed due to "+window[eval(who).opposition].fullStats.character_name+" dodging.");
    } else {
        //no defense
        var damage = Math.max((eval(who).fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
        window[eval(who).opposition].hitPoint =  window[eval(who).opposition].hitPoint - damage;
        if(eval(who).Movement != "Charge") {
            $("#comments p").append(eval(who).fullStats.character_name + " charged.")
            damage = damage + 2;
        }
        $("#comments p").append(eval(who).fullStats.character_name+"'s attack dealt " + damage + " damage to "+window[eval(who).opposition].fullStats.character_name+".");
    }
}

ActionFunc.aimedAttack = function(who){
    eval(who).curStats.speed_point = eval(who).curStats.speed_point - 3;
    if(window[eval(who).opposition].Defensive = "Block"){
        var damage = Math.max((eval(who).fullStats.strength_point - window[eval(who).opposition].fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2)+3, 0);
        if(eval(who).Movement != "Charge") {
            $("#comments p").append(eval(who).fullStats.character_name + " charged.")
            damage = damage + 2;
        }
        window[eval(who).opposition].hitPoint =  window[eval(who).opposition].hitPoint - damage;
        $("#comments p").append(window[eval(who).opposition].fullStats.character_name + " blocked "+eval(who).fullStats.character_name+"'s attack and got dealt " + damage + " damage.");
    } else if(window[eval(who).opposition].Defensive = "Dodge" && (window[eval(who).opposition].fullStats.speed_point - eval(who).fullStats.speed_point + Math.floor(Math.random()*6)+1 > 4)){
        //opposition dodges
        $("#comments p").append(eval(who).fullStats.character_name + " missed due to "+window[eval(who).opposition].fullStats.character_name+" dodging.");
    } else {
        //no defense
        var damage = Math.max((eval(who).fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2)+3, 0);
        window[eval(who).opposition].hitPoint =  window[eval(who).opposition].hitPoint - damage;
        if(eval(who).Movement != "Charge") {
            $("#comments p").append(eval(who).fullStats.character_name + " charged.")
            damage = damage + 2;
        }
        $("#comments p").append(eval(who).fullStats.character_name+"'s attack dealt " + damage + " damage to "+window[eval(who).opposition].fullStats.character_name+".");
    }
}    

//function reload(who, func){

//}
ActionFunc.charge = function(who) {
    if(eval(who).curStats.speed_point > 0 ) {
        eval(who).curStats.speed_point--;
        $("#comments p").append(eval(who).fullStats.character_name + " charged. ");
    } else {
        $("#comments p").append(eval(who).fullStats.character_name+" did not have enough strength to charge. They attempt to gather speed. ");
        restoreSpeed(who);
    }
}

ActionFunc.block = function(who) {
    if(eval(who).curStats.strength_point > 1 ) {
        eval(who).curStats.strength_point = eval(who).curStats.strength_point - 2;
        $("#comments p").append(eval(who).fullStats.character_name + " blocked. ");
    } else {
        $("#comments p").append(eval(who).fullStats.character_name+" did not have enough strength to block. ");
    }
}

ActionFunc.dodge = function(who) {
    if(eval(who).curStats.speed_point > 0 ) {
        eval(who).curStats.speed_point--;
        $("#comments p").append(eval(who).fullStats.character_name + " attempted to dodge. ");
    } else {
        $("#comments p").append(eval(who).fullStats.character_name+" did not have enough speed to dodge. ");
    }
}

module.exports = ActionFunc;