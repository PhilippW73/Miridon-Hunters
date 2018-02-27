import React, { Component } from 'react';
import Input from "../Input";
import FormBtn from "../FormBtn";
import API from "../../utils/user/API";


class Bio extends Component {
  
	constructor(props) {
	  super(props);
	  this.state = {
	    bio: props.bio
	  };
	}

  handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
  };

  handleFormSubmitBio = event => {
      event.preventDefault();
      if (this.props.bio !== this.state.bio) {
        API.updateUser({
          bio: this.state.bio
        })
          .then(res => this.loadUser())
          .catch(err => console.log(err));
      }
      
      console.log(this.state.bio);

  //     componentWillReceiveProps(nextProps) {
		//   if(next.props.bio !== this.props.bio) {
		//   this.setState()
		//   }
		// };
  };

	render() {

		return (
			<div>
				<h2> Bio </h2>
			  	<p>{this.props.bio}</p>
			  	<Input onChange={this.handleInputChange} name={"bio"}/>
			    <FormBtn onClick={this.handleFormSubmitBio}>
			    	Update Bio
	  			</FormBtn>
	  		</div>

		)

	}	
}

export default Bio;
		