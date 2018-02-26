import React from "react";
import "./ButtonDropdown.css";

const ButtonDropdown = props =>
<div className="btn-group" role="group">
	<button id={`${props.name}Dropdown`} type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" disabled={props.disabled}>
		<i className={`fa ${props.faIcon}`}></i> <span id={`${props.name}DropdownText`} disabled={props.disabled}>{props.current ? props.current : props.name}</span>
	</button>
	<div className="dropdown-menu" aria-labelledby={`${props.name}Dropdown`} value={props.name}>
		<ul className="list-group">
			{props.list
			.map(item => {
				return (
					<li key={item.name} className="list-group-item">
						<a className="dropdown-item" href="#">{item.name}</a>
					</li>
				);
			})}
		</ul>
	</div>
</div>;


export default ButtonDropdown