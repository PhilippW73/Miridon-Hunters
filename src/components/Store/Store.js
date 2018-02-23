import React from "react";
import "./Store.css";
import StatBuy from "../StatBuy";

const Store = props => {
  switch (currentMaterial) {
    case "Meat/ Protein (lbs.)":
      return <StatBuy currentMaterial stat="Strength" cur={props.strength_point} onIncrease={props.increase}/>;
      break;
    case "Produce (lbs.)":
      return <StatBuy currentMaterial stat="Speed" cur={props.speed_point} onIncrease={props.increase}/>;
      break;
    case "Ghost HP":
      return <StatBuy currentMaterial stat="Ghost HP" cur={props.ghost_hit_point} onIncrease={props.increase}/>;
      break;
    case "Steel (lbs.)":
    case "steel":
      return <ButtonDropdown name="Weapon" faIcon="fa-crosshairs" list={props.steelweapons}/>;
      break;
    case "Mechanical Parts (oz.)":
      return <ButtonDropdown name="Weapon" faIcon="fa-cog" list={props.mechweapons}/>;
      break;
    case "Puzzle Parts (oz.)":
      return <ButtonDropdown name="Weapon" faIcon="fa-puzzle-piece" list={props.puzzleweapons}/>;
      break;
    case "Imperial Pounds":
      return <p>Imperial pounds are only used for exchange. They are equivalent to one pound of meat.</p>;
      break;
    default:
      return <div/>;
  }
};

export default Store;
