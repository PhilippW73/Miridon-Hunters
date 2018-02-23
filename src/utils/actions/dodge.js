import React from "react";

export default {
  dodge: function(who){
    who.curStats.speed_point--;
    return {
      who: who,
      comment: who.fullStats.character_name + " attempted to dodge. "
    };
  }
};