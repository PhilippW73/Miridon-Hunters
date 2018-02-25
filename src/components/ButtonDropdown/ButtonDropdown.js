import React from "react";
import "./ButtonDropdown.css";
import DropdownButton from "react-bootstrap";


const ButtonDropdown = props =>
<Dropdown id={`${props.name}Dropdown`}
		bsStyle="default"
		key={`${props.name}Dropdown`}>
	<Dropdown.Toggle
		disabled={props.disabled}>
			<i className={`fa ${props.faIcon}`}></i>
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