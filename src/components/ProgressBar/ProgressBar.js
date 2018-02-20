import React from "react";
import "./ProgressBar.css";
// needs from char: curStat, maxStat
//needs general: progressClass
const ProgressBar = props =>
	<div class="progress">
	{/* If an id is needed, add in  id={`${props.id}${props.stat.reference}`}  and add sending in the id*/}
		<div class={`progress-bar ${props.stat.progressClass}`} role="progressbar" style={`width: ${100 * props.cur/props.max}%`} aria-valuenow={props.cur} aria-valuemin="0" aria-valuemax={props.max} >{props.stat.name}: 
			{props.cur}/{props.max}
		</div>
	</div>;

export default ProgressBar
