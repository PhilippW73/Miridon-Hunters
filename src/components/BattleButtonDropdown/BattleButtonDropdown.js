import React from "react";
import "./BattleButtonDropdown.css";

const BattleButtonDropdown = props =>
<div className="btn-group" role="group">
	<button id={`${props.actionType.name}Dropdown`} type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" { props.actionsDisabled ? "disabled" : "" }>
		<i className={`fa ${props.actionType.faIcon}`}></i> <span id={`${props.actionType.name}DropdownText`} { props.actionsDisabled ? "disabled" : "" }>{props.current ? props.current : props.actionType.name}</span>
	</button>
	<div className="dropdown-menu" aria-labelledby={`${props.actionType.name}Dropdown`} value={props.actionType.name}>
		<ul className="list-group">
			{props.actions.filter(action => {action.actionType === props.actionType.name && (action.actionType !== "meleeCombo" || meleeCombo === true)})
			.map(action => {
				return (
					<li key={action.name} className="list-group-item">
						<a className="dropdown-item" href="#">{action.name}</a>
					</li>
				);
			})}
		</ul>
	</div>
</div>;


export default BattleButtonDropdown