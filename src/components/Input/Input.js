import React from "react";
import "./Input.css";

export const Input = props =>
  <div className="form-group">
   {console.log(props)}
    <input className="form-control" value={props.val} name={props.name} />
  </div>;

export default Input







// import React from "react";
// import "./Input.css";

// const Input = props =>

// <div>

// 	<form action="/action_page.php">
	  
// 	  <div className="form-group">
// 	    <label htmlFor="password">Password</label>
// 	    <input type="password" className="form-control" id="password" />
// 	  </div>
	  
// 	  <div className="checkbox">
// 	    <label><input type="checkbox"/> Remember me</label>
// 	  </div>
// 	  <button type="submit" className="btn btn-default">Submit</button>

// 	  <div className="form-group">
// 	    <label htmlFor="bio">Bio:</label>
// 	    <input type="bio" className="form-control" id="bio"/>
// 	  </div>
// 	  <button type="submit" className="btn btn-default">Submit</button>
	
// 	</form>
// </div>;

// export default Input