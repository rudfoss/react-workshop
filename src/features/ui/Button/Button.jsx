import React from "react"
import PropTypes from "prop-types"

import classes from "./Button.scss"

export const Button = ({ children, mode, ...props, }) => (
	<button className={classes.button} data-mode={mode} {...props}>{children}</button>
)
Button.propTypes = {
	mode: PropTypes.oneOf([
		"primary", "secondary", "cancel"
	]),
	children: PropTypes.node
}
Button.defaultProps = {
	mode: "primary"
}

export default Button