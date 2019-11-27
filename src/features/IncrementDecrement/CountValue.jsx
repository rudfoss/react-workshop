import React from "react"
import PropTypes from "prop-types"

export const CountValue = (props) => (
	<h1>{props.count}</h1>
)
CountValue.propTypes = {
	count: PropTypes.number.isRequired
}

export default CountValue