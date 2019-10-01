import React, { useState } from "react"
import PropTypes from "prop-types"

import TextInput from "ui/TextInput"
import Button from "ui/Button"

import classes from "./Login.scss"

export const Login = ({ loginFailed, failureMessage, onLogin, history }) => {
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
					<Button type="button" mode="secondary" onClick={() => history.push("/create-user")}>New user</Button>
					<Button>Log in</Button>
				</div>
			</form>
		</div>
	)
}
Login.propTypes = {
	loginFailed: PropTypes.bool,
	failureMessage: PropTypes.string,

	onLogin: PropTypes.func.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired
}

export default Login