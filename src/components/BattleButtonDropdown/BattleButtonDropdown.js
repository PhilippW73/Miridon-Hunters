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
			{props.current ? props.current : props.actionType.name}
	</Dropdown.Toggle>
	<Dropdown.Menu className="default">
	{props.actions.filter(action => {action.actionType === props.actionType.name && (action.actionType !== "meleeCombo" || meleeCombo === true)})
			.map(item => {
				return (
					<MenuItem eventKey={item.name} value={item.name} onSelect={props.onSelect}>{item.name}</MenuItem>
				);
			})}
	</Dropdown.Menu>
</Dropdown>;


export default BattleButtonDropdown