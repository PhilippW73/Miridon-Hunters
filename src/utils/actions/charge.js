import React from "react";

export default {
  charge: function(who){
    who.curStats.speed_point--;
    return {
      who: who,
      comment: who.fullStats.character_name + " charged. "
    };
  }
};