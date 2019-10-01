import React from "react"
import { Link } from "react-router-dom"

export const Welcome = () => {
	return (
		<div>
			<h1>Welcome to the React Workshop Chat Application</h1>
			<p><Link to="/login">Please log in to proceeed</Link></p>
		</div>
	)
}

export default Welcome