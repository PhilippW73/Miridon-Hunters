import React from "react";

export default {
  restoreSpeed: function(who){
    let restoreValue = Math.min((who.curStats.speed_point + 2) + Math.floor(who.fullStats.speed_point / 5), (who.fullStats.speed_point - who.curStats.speed_point));
    if(who.Offensive === "Restore Strength Points"){
        restoreValue = Math.min((who.fullStats.speed_point + 3)+ Math.floor(who.fullStats.speed_point / 5)*2, (who.fullStats.speed_point - who.curStats.speed_point)); 
    }
    return {
      result: who,
      comment: who.fullStats.character_name + " restored " + restoreValue + " Speed Points. "
    };
  }
};
