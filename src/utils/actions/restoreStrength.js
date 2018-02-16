import React from "react";

export default {
  restoreStrength: function(who){
    let restoreValue = Math.min((who.curStats.strength_point + 2) + Math.floor(who.fullStats.strength_point / 5), (who.fullStats.strength_point - who.curStats.strength_point));
    if(who.Movement === "Restore Speed Points"){
        restoreValue = Math.min((who.fullStats.strength_point+3)+ Math.floor(who.fullStats.strength_point / 5)*2, (who.fullStats.strength_point - who.curStats.strength_point)); 
    }
    return {
      result: who,
      comment: who.fullStats.character_name + " restored " + restoreValue + " Strength Points. "
    };
  }
};