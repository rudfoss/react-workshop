import React from "react"
import PropTypes from "prop-types"

import classes from "./Button.scss"

export const Button = ({ children, mode, ...props, }) => (
	<button {...props} className={`${classes.button} ${props.className}`} data-mode={mode}>{children}</button>
)
Button.propTypes = {
	mode: PropTypes.oneOf([
		"primary", "secondary", "abort"
	]),
	className: PropTypes.string,
	children: PropTypes.node
}
Button.defaultProps = {
	mode: "primary",
	className: ""
}

export default Button