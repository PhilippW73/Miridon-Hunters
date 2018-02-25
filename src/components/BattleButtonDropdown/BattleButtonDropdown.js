import React from "react";
import "./BattleButtonDropdown.css";
import DropdownButton from "react-bootstrap";

const BattleButtonDropdown = props =>
<Dropdown id={`${props.actionType.name}Dropdown`}
		bsStyle="default"
		key={`${props.actionType.name}Dropdown`}>
	<Dropdown.Toggle
		disabled={props.actionsDisabled}>
			<i className={`fa ${props.actionType.faIcon}`}></i> 
			<span id={`${props.actionType.name}DropdownText`} disabled={props.actionsDisabled}>{props.current ? props.current : props.actionType.name}</span>
	</Dropdown.Toggle>
	<Dropdown.Menu className="default">
	{props.actions.filter(action => {action.actionType === props.actionType.name && (action.actionType !== "meleeCombo" || meleeCombo === true)})
			.map(action => {
				return (
					<li key={action.name} className="list-group-item">
						<a className="dropdown-item" href="#">{action.name}</a>
					</li>
				);
			})}
	</Dropdown.Menu>
</Dropdown>;


export default BattleButtonDropdown