import React from "react";
import "./StatBuy.css";

// return <StatBuy currentMaterial stat="Ghost HP" cur={props.ghost_hit_point} onIncrease={props.increase}/>;
const StatBuy = props => 
<div>
  {`Current ${props.stat}: ${props.cur}`}
  Cost to increase: {
    // switch () {

    }
  }
</div>;

// Every pound of protein adds one 1 xp to Strength

// Every pound of produce adds one 10 xp to Speed
export default StatBuy;
