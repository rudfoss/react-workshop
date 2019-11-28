import React from "react"
import PropTypes from "prop-types"

import Button from "./Button"

export const CountController = ({ increment, decrement }) => {
	// const { setCount, count } = props
	// const setCount = props.setCount
	// const count = props.count

	return (
		<div className="btn-group" role="group" aria-label="Count controller button">
			<Button onClick={decrement}>-</Button>
			<Button onClick={increment}>+</Button>
		</div>
	)
}
CountController.propTypes = {
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired
}

export default CountController