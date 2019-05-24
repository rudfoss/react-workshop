import React from "react"
import { NavLink } from "react-router-dom"

export const Header = () => {
	return (
		<nav>
			<NavLink exact activeClassName="active-nav-item" to="/">Home</NavLink>
			<NavLink activeClassName="active-nav-item" to="/new">New</NavLink>
			<NavLink activeClassName="active-nav-item" to="/edit/user-id">Edit</NavLink>
		</nav>
	)
}
Header.propTypes = {
}
export default Header