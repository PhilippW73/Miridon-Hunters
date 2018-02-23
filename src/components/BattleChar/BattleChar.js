import React from "react";
import "./BattleChar.css";
import ProgressBar from "../ProgressBar";

const BattleChar = props =>
<div class="thumbnail">
    <img alt={props.fullStats.character_name} src={props.fullStats.character_image} data-toggle="tooltip" data-placement="top" title={props.fullStats.character_desc} id={props.position} value={props.fullStats.character_id} />
    <div class="caption">
        <h3>
            {props.fullStats.character_name}
        </h3>
            {props.stats.map(stat =>
                <ProgressBar cur={props.curStats[stat.reference]} max={props.fullStats[stat.reference]} stat={stat}/>
            )}
    </div>
</div>;


export default BattleChar