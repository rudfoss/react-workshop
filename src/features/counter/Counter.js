import React from "react"
import PropTypes from "prop-types"

export const Counter = (props) => (
	<div>
		<button onClick={props.onIncrement}>{props.count} - {props.buttonText}</button>
	</div>
)
Counter.propTypes = {
	count: PropTypes.number,
	buttonText: PropTypes.string,
	onIncrement: PropTypes.func.isRequired
}
export default Counter