import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
//import './App.css'
//import LoginForm from '../components/LoginForm'
//import SignupForm from '../components/SignupForm'
import Header from '../components/Header'
//import HomeComp from '../components/HomeComp'



class Home extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	render() {
		return (
			<div className="App">
				
				<Header user={this.state.user} />
				{/* LINKS to our different 'pages' */}
				{/*<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
				*/}
				
			</div>
		)
	}
}

export default Home