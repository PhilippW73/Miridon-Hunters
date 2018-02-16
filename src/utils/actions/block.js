import React from "react";

export default {
  block: function(who){
    who.curStats.strength_point = who.curStats.strength_point - 2;
    return {
      result: who,
      comment: who.fullStats.character_name + " blocked. "
    };
  }
};