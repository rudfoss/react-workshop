import React from "react"
import { Link } from "react-router-dom"

export const Nav = () => (
	<nav className="nav">
		<Link to="/" className="nav-link">Home</Link>
		<Link to="/increment" className="nav-link">Increment</Link>
		<Link to="/incdec" className="nav-link">IncDec</Link>
		<Link to="/formtest" className="nav-link">Form Test</Link>
		<Link to="/newuser" className="nav-link">New User Form</Link>
		<Link to="/dev" className="nav-link">Developer Form</Link>
		<Link to="/search" className="nav-link">Search</Link>
	</nav>
)

export default Nav