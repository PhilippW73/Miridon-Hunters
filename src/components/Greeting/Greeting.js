import React from "react";
import "./Greeting.css";

const Greeting = props => {
	console.log('props in greeting component: ', props);
	if (props.user) {
		return (
			<div className="Home">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
			</div>
		)
	} else {
		return (
			<div className="Home">
				<p>Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
			</div>
		)
	}

	<p> {props.user.user.bio} </p>
}

export default Greeting

