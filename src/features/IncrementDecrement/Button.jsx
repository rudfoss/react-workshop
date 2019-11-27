import React from "react"
import PropTypes from "prop-types"

export const Button = (props) => {
	return (
		<button className="btn btn-primary" onClick={props.onClick}>{props.children}</button>
	)
}
Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired
}

export default Button