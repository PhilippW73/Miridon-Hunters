import React from "react";
import "./Greeting.css";

// const styles = StyleSheet.create({
// 	: {
// 	fontFamily: 'Bad Script',
// 	fontSize: 20,
// 	},

// });


const Greeting = props => {
	console.log('props in greeting component: ', props);
	if (props.user) {
		return (
			<div className="Home">
				<p id="greetingtext" >Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
			</div>
		)
	} else {
		return (
			<div className="Home">
				<p id="greetingtext">Current User:</p>
				<code>
					{JSON.stringify(props)}
				</code>
			</div>
		)
	}

	// <p> {props.user.user.bio} </p>
}

export default Greeting

