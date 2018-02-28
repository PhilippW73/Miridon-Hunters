import React from "react";
import "./ButtonLinkInfo.css";

const ButtonLinkInfo = props =>
<div className="btn-group" role="group">
	<button type="button" className="btn btn-default" disabled={props.disabled} href={`http://miridon.reuniontechnologies.com/page/${props.link}`}  target="_blank">
		{props.text}
	</button>
</div>;

export default ButtonLinkInfo