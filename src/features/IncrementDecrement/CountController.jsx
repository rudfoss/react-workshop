import React from "react"
import PropTypes from "prop-types"

import Button from "./Button"

export const CountController = (props) => {
	const { setCount, count } = props
	// const setCount = props.setCount
	// const count = props.count

	const incrementer = () => {
		setCount(count + 1)
	}
	const decrementer = () => {
		setCount(count - 1)
	}

	return (
		<div className="btn-group" role="group" aria-label="Count controller button">
			<Button onClick={decrementer}>-</Button>
			<Button onClick={incrementer}>+</Button>
		</div>
	)
}
CountController.propTypes = {
	count: PropTypes.number.isRequired,
	setCount: PropTypes.func.isRequired
}

export default CountController