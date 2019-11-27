import React from "react"
import { Link } from "react-router-dom"

export const Nav = () => (
	<nav className="nav">
		<Link to="/" className="nav-link">Home</Link>
		<Link to="/increment" className="nav-link">Increment</Link>
		<Link to="/incdec" className="nav-link">IncDec</Link>
	</nav>
)

export default Nav