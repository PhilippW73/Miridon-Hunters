import React, { Component } from 'react'
import "./DisplayLinks.css";

const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<nav className="navbar">
			
				<ul className="nav">
				
					<li className="nav-item">
					
						<a href="/" className="nav-link">
							Home
						</a>
					</li>
					<li>
						<a href="#" className="nav-link" onClick={props._logout}>
							Logout
						</a>
					</li>
				</ul>
			</nav>
		)
	} else {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<a href="/" className="nav-link">
							Home
						</a>
					</li>
					<li className="nav-item">
						<a href="/login" className="nav-link">
							login
						</a>
					</li>
					<li className="nav-item">
						<a href="/signup" className="nav-link">
							sign up
						</a>
					</li>
				</ul>
			</nav>
		)
	}
}
export default DisplayLinks