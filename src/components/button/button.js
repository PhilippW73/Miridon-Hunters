import React from "react";
import "./button.css";

const button = props =>
<button
	onClick={props.onClick}
	className={`card-btn ${props["data-value"]}`}
	{...props}
/>;

export default button