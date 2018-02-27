import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import "./SignupForm.css";

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			email: '',
			bio: '',
			img: '',
			confirmPassword: '',
			redirectTo: null
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		event.preventDefault()
		console.log('button clicked')
		// TODO - validate!
		axios.post('/auth/signup', {
				username: this.state.username,
				email: this.state.email,
				password: this.state.password,
				bio: this.state.bio,
				img: this.state.img
			})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('youre good')
					this.setState({
						redirectTo: '/login'
					})
				} else {
					console.log('duplicate')
				}
			})
	}
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} 
		return (
				<div className="SignupForm">
					<h1>Signup form</h1>
						<form onSubmit={this.
							handleSubmit}>
							<div>
								<input 
									type="email"
									name="email"
									value={this.state.email}
									onChange={this.handleChange}
									required
								/>
								<label htmlFor="email">Email: </label>

								<div className="requirements">
									Must be a valid email address.
									</div>
							</div>

							<div>
								<input 
									required
									type="text"
									name="username"
									id="username"
									value={this.state.username}
									onChange={this.handleChange}
								/>
								<label htmlFor="username">Username: </label>
							</div>

							<div>
								<input
									type="text"
									name="bio"
									id="bio"
									value={this.state.bio}
									onChange={this.handleChange}
								/>
								<label htmlFor="bio">Bio: </label>
							</div>	

							<div>
								<label htmlFor="password">Password: </label>
								<input 
									required
									type="password"
									name="password"
									id="password"
									pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" 
									value={this.state.password}
									onChange={this.handleChange}
								/>
								<div className="requirements">
									Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.
									</div>
							</div>

							<div>
								<input
									required
									type="password"
									name="confirmPassword"
									value={this.state.confirmPassword}
									onChange={this.handleChange}
								/>
								<label htmlFor="confirmPassword">Confirm Password: </label>
							</div>

							<div>
								<input 
									
									type="text"
									name="img"
									id="img"
									value={this.state.img}
									onChange={this.handleChange}
								/>
								<label htmlFor="img">Image: </label>
							</div>

							<button type="submit">Sign up</button>
						</form>
				</div>
			
		)
	}
	
}

export default SignupForm
