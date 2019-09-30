import React, { useState } from "react"
import { Redirect } from "react-router-dom"

export const Welcome = () => {
	const [toLogin, setToLogin] = useState(false)
	if (toLogin) {
		return (<Redirect to="/login"/>)
	}

	return (
		<div>
			<h1>Welcome to the React Workshop Chat Application</h1>
			<p>Please log in to proceeed</p>
			<button onClick={() => setToLogin(true)}>Log in</button>
		</div>
	)
}

export default Welcome