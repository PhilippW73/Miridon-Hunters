import React from "react";
import "./Input.css";

const Input = props =>

<div>

	<form action="/action_page.php">
	  
	  <div className="form-group">
	    <label htmlFor="password">Password</label>
	    <input type="password" className="form-control" id="password" />
	  </div>
	  
	  <div className="checkbox">
	    <label><input type="checkbox"/> Remember me</label>
	  </div>
	  <button type="submit" className="btn btn-default">Submit</button>

	  <div className="form-group">
	    <label htmlFor="pwd">Bio:</label>
	    <input type="bio" className="form-control" id="bio"/>
	  </div>
	  <button type="submit" className="btn btn-default">Submit</button>
	
	</form>
</div>;

export default Input