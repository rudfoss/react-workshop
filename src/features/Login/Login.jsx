import React, { useState } from "react"
import PropTypes from "prop-types"
import { Redirect } from "react-router-dom"

import TextInput from "ui/TextInput"
import Button from "ui/Button"

import classes from "./Login.scss"

export const Login = ({ isAuthenticated, loginFailed, failureMessage, onLogin, onCreateUser }) => {
	const [userPass, setUserPass] = useState({
		username: "",
		password: ""
	})

	const changeProp = (prop) => (newValue) => setUserPass({
		...userPass,
		[prop]: newValue
	})
	const onSubmit = (evt) => {
		evt.preventDefault()
		onLogin(userPass)
	}

	if (isAuthenticated) {
		return (<Redirect to="/chat"/>)
	}

	return (
		<div className={classes.loginForm}>
			<form onSubmit={onSubmit}>
				<TextInput
					label="User name"
					value={userPass.username}
					onChange={changeProp("username")}/>
				<TextInput
					label="Password"
					value={userPass.password}
					type="password"
					onChange={changeProp("password")}/>
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
	isAuthenticated: PropTypes.bool,
	loginFailed: PropTypes.bool,
	failureMessage: PropTypes.string,

	onLogin: PropTypes.func.isRequired,
	onCreateUser: PropTypes.func.isRequired
}

export default Login