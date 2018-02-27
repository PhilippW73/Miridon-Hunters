import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Well, Button, Jumbotron, Col } from 'react-bootstrap';
import "./LoginForm.css";


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
            <div className="container">
			<h1>Login form</h1>
					<Jumbotron>
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="email">Email: </label>
						<br />
							<input
								type="email"
								name="email"
								value={this.state.email}
								onChange={this.handleChange}
								required
							/>
							< br />
							<label htmlFor="username">Username: </label>
							<br />
							<input
								type="text"
								name="username"
								value={this.state.username}
								onChange={this.handleChange}
								required
							/>
							< br />
							<label htmlFor="password">Password: </label>
							<br />
							<input
								type="password"
								name="password"
								required
								value={this.state.password}
								onChange={this.handleChange}
								required
							/>
							<br />
							<br />
							<input type="submit" value="Login" color="red" />
					</form>

					</Jumbotron>
</div>					
				</div>
				
			)
		}
	}
}

export default LoginForm