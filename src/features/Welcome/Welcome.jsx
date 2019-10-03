import React from "react"
import { Link } from "react-router-dom"

import CreateUser from "features/CreateUser"

export const Welcome = () => {
	return (
		<div>
			<h1>Welcome to the React Workshop Chat Application</h1>
			<p><Link to="/login">Please log in to proceeed</Link></p>
			<CreateUser/>
		</div>
	)
}

export default Welcome