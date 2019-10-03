import React from "react"
import { Link } from "react-router-dom"

export const Welcome = () => {
	return (
		<div>
			<h1>Welcome to the React Workshop Chat Application</h1>
			<p><Link to="/login">Please log in to proceeed</Link> or <Link to="/create-user">create a new user</Link></p>
		</div>
	)
}

export default Welcome