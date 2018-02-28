import React from "react";
import "./ButtonDropdown.css";
import {DropdownButton, Dropdown, MenuItem} from "react-bootstrap";
import FontAwesome  from 'react-fontawesome';
 

const ButtonDropdown = props =>
<Dropdown id={`${props.name}Dropdown`}
		bsStyle="default"
		key={`${props.name}Dropdown`}>
	<Dropdown.Toggle
		disabled={props.disabled}>
			{props.faIcon ? <FontAwesome name={props.faIcon} /> : ""} 
			{props.current ? props.current : props.name}
	</Dropdown.Toggle>
	<Dropdown.Menu className="default">
		{props.list
			.map(item => {
				return (
					<MenuItem eventKey={item.name} value={item.name} onSelect={props.onSelect}>{item.name}</MenuItem>
				);
		})}
	</Dropdown.Menu>
</Dropdown>;

export default ButtonDropdown