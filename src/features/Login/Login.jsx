import React from "react"
import PropTypes from "prop-types"

import classes from "./Login.scss"
import TextInput from "ui/TextInput"
import Button from "ui/Button"

const preventSubmit = (onSubmit) => (evt) => {
	evt.preventDefault()
	onSubmit()
}

export const Login = ({ 
	history,
	username, password,
	onSetUsername, onSetPassword,
	onLogin
}) => (
	<div className={classes.loginForm}>
		<form onSubmit={preventSubmit(onLogin)}>
			<TextInput
				label="User name"
				value={username}
				onChange={onSetUsername}/>
			<TextInput
				label="Password"
				type="password"
				value={password}
				onChange={onSetPassword}/>
			<div className={classes.controls}>
				<Button type="button" mode="secondary" onClick={() => history.push("/create-user")}>New user</Button>
				<Button>Log in</Button>
			</div>
		</form>
	</div>
)
Login.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,

	username: PropTypes.string,
	password: PropTypes.string,

	onSetUsername: PropTypes.func.isRequired,
	onSetPassword: PropTypes.func.isRequired,
	onLogin: PropTypes.func.isRequired
}

export default Login