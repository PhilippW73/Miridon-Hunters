import React, { Component } from 'react';
import Input from "../Input";
import FormBtn from "../FormBtn";
import API from "../../utils/user/API";


class Bio extends Component {
  
	constructor(props) {
	  super(props);
	  this.state = {
	    bio: ''
	  };
	}

  handleInputChange = event => {
      const { name, value } = event.target;
      console.log('name: ', name);
      console.log('value: ', value);
      this.setState({
        [name]: value
      }, ()=> {
      	// console.log(this.state);
      });
  };

  handleFormSubmitBio = event => {
      event.preventDefault();
      if (this.props.bio !== this.state.bio) {
        API.updateUser({
          bio: this.state.bio
        })
          .then(res => {
          	// this.loadUser();
          	var jsonData = res.config.data
          	const bio = JSON.parse(jsonData).bio
          	this.setState({bio: ''}, () => console.log('after setState: ', this.state));
          	this.props.bioChanger(bio);
          	console.log('state: ', this.state)
          })
          .catch(err => console.log(err));
      }
      
      // console.log(this.state.bio);

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
			  	{/*<Input onChange={this.handleInputChange} name={'bio'} val={this.state.bio}/>*/}
			  	<div className="form-group">
    				<input 
    					className="form-control"
    					onChange={this.handleInputChange}
    					value={this.state.bio}
    					name={'bio'}
    				/>
 				</div>
			    <FormBtn onClick={this.handleFormSubmitBio}>
			    	Update Bio
	  			</FormBtn>
	  		</div>

		)

	}	
}

export default Bio;
		