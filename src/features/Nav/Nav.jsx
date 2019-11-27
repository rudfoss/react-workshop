import React from "react"
import { Link } from "react-router-dom"

export const Nav = () => (
	<nav className="nav">
		<Link to="/" className="nav-link">Home</Link>
		<Link to="/incrementer" className="nav-link">Increment</Link>
		<Link to="/shared-incrementer" className="nav-link">Shared Incrementer</Link>
	</nav>
)

export default Nav