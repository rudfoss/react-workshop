import React from "react"
import PropTypes from "prop-types"

export const Count = ({ count }) => (
	<span>Count is currently: {count} </span>
)
Count.propTypes = {
	count: PropTypes.number.isRequired
}

export default Count