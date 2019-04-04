import React from "react"
import PropTypes from "prop-types"

export const Counter = (props) => (
	<div>New count {props.count}</div>
)
Counter.propTypes = {
	count: PropTypes.number
}
export default Counter