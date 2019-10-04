import React from "react"
import PropTypes from "prop-types"
import { Redirect } from "react-router-dom"

import TextInput from "ui/TextInput"
import Button from "ui/Button"

import classes from "./Login.scss"

export const Login = ({
	username, password,
	onSetUsername, onSetPassword,
	isAuthenticated, loginFailed, failureMessage, onLogin, onCreateUser
}) => {
	const onSubmit = (evt) => {
		evt.preventDefault()
		onLogin()
	}

	if (isAuthenticated) {
		return (<Redirect to="/chat"/>)
	}

	return (
		<div className={classes.loginForm}>
			<form onSubmit={onSubmit}>
				<TextInput
					label="User name"
					value={username}
					onChange={onSetUsername}/>
				<TextInput
					label="Password"
					value={password}
					type="password"
					onChange={onSetPassword}/>
				{loginFailed && (
					<p className={classes.failureMessage}>
						{failureMessage}
					</p>
				)}
				<div className={classes.controls}>
					<Button type="button" mode="secondary" onClick={onCreateUser}>New user</Button>
					<Button>Log in</Button>
				</div>
			</form>
		</div>
	)
}
Login.propTypes = {
	username: PropTypes.string,
	password: PropTypes.string,
	
	isAuthenticated: PropTypes.bool,
	loginFailed: PropTypes.bool,
	failureMessage: PropTypes.string,

	onSetUsername: PropTypes.func.isRequired,
	onSetPassword: PropTypes.func.isRequired,
	onLogin: PropTypes.func.isRequired,
	onCreateUser: PropTypes.func.isRequired
}

export default Login