import React from "react";
import "./Input.css";

const Input = props =>

<div>

	<form action="/action_page.php">
	  
	  <div class="form-group">
	    <label for="password">Password</label>
	    <input type="password" class="form-control" id="password" />
	  </div>
	  <div class="checkbox">
	    <label><input type="checkbox"/> Remember me</label>
	  </div>
	  <button type="submit" class="btn btn-default">Submit</button>

	  <div class="form-group">
	    <label for="pwd">Bio:</label>
	    <input type="bio" class="form-control" id="bio"/>
	  </div>
	  <button type="submit" class="btn btn-default">Submit</button>
	
	</form>
</div>;

export default Input