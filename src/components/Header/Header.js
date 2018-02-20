import React from "react";
import "./Header.css";

{/*Passport Code*/}
const Header = props => {
	console.log(props);
	let Greeting
	if (props.user === null) {
		Greeting = <p>Hello guest</p>
	} 
	// else if (props.user.firstName) {
	// 	Greeting = (
	// 		<p>
	// 			{/*Welcome back, <strong>{props.user.firstName}</strong>*/}
	// 		</p>
	// 	)
	// } else if (props.user.local.username) {
	// 	Greeting = (
	// 		<p>
	// 			Welcome back, <strong>{/*props.user.local.username*/} </strong>
	// 		</p>
	// 	)
	// }
	return (
		<div className="Header">
			{Greeting}
		</div>
	)
}

export default Header