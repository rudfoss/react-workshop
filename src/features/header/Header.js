import React from "react"
import { NavLink } from "react-router-dom"
import PropTypes from "prop-types"

export const Header = (props) => {
	return (
		<nav>
			<NavLink exact activeClassName="active-nav-item" to="/">Home</NavLink>
			<NavLink activeClassName="active-nav-item" to="/new">New</NavLink>
			<NavLink activeClassName="active-nav-item" to="/edit/user-id">Edit</NavLink>
			<button onClick={props.onSave}>Save</button>
			<button onClick={props.onLoad}>Load</button>
		</nav>
	)
}
Header.propTypes = {
	onSave: PropTypes.func.isRequired,
	onLoad: PropTypes.func.isRequired
}
export default Header