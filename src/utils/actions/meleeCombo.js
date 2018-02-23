import React from "react";

export default {
  meleeCombo: function(who, target) {
    who.curStats.strength_point = who.curStats.strength_point - 1;
    who.curStats.speed_point = who.curStats.speed_point - 2;
    let comment = "";
    if(target.Defensive = "Block"){
        let damage = Math.max((who.fullStats.strength_point - target.fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
        if(who.Movement != "Charge") {
            damage = damage + 2;
        }
        target.curStats.hit_point =  target.curStats.hit_point - damage;
        comment = comment +(target.fullStats.character_name + " blocked "+who.fullStats.character_name+"'s attack and got dealt " + damage + " damage. ");
    } else if(target.Defensive = "Dodge" && (target.fullStats.speed_point - who.fullStats.speed_point + Math.floor(Math.random()*6)+1 > 4)){
        //opposition dodges
        comment = comment +(who.fullStats.character_name + " missed due to "+target.fullStats.character_name+" dodging. ");
    } else {
        //no defense
        let damage = Math.max((who.fullStats.strength_point + Math.floor(Math.random()*6)+Math.floor(Math.random()*6)+2), 0);
        target.curStats.hit_point =  target.curStats.hit_point - damage;
        if(who.Movement != "Charge") {
            damage = damage + 2;
        }
        comment = comment +(who.fullStats.character_name+"'s attack dealt " + damage + " damage to "+target.fullStats.character_name+". ");
    }
    //toggleCombo(false);
    return {
      who: who,
      target: target,
      comment: comment
    };
  }
};