import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'


class LoginForm extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			email: '',
			password: '',
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
		console.log('handleSubmit')
		this.props._login(this.state.username, this.state.password, this.state.email)
		this.setState({
			redirectTo: '/Profile'
		})
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div className="LoginForm">
					<h1>Login form</h1>
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="username">Email: </label>
							<input
								type="text"
								name="email"
								value={this.state.email}
								onChange={this.handleChange}
								required
							/>
							<label htmlFor="username">Username: </label>
							<input
								type="text"
								name="username"
								value={this.state.username}
								onChange={this.handleChange}
								required
							/>
							<label htmlFor="password">Password: </label>
							<input
								type="password"
								name="password"
								required
								value={this.state.password}
								onChange={this.handleChange}
							/>
							<input type="submit" value="Login" />
					</form>
					
				</div>
			)
		}
	}
}

export default LoginForm