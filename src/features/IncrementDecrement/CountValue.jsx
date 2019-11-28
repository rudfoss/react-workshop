import React from "react"
import PropTypes from "prop-types"

/*
function onNumericInputChange(onChange, a, b) {
	return function(evt) {
		const newValue = evt.target.value
		const newNumber = parseInt(newValue)
		if (isNaN(newNumber)){
			return
		}
		onChange(newNumber)
	}
}
*/

const onNumericInputChange = (onChange) => (evt) => {
	const newValue = evt.target.value
	const newNumber = parseInt(newValue)
	if (isNaN(newNumber)){
		return
	}
	onChange(newNumber)
}

export const CountValue = ({ count, setCount }) => {
	return (
		<div className="form-group">
			<label>Count</label>
			<input
				type="text"
				className="form-control"
				value={count}
				/* onChange={(evt) => onNumericInputChange(evt, props.setCount)} */
				onChange={onNumericInputChange(setCount)}/>
		</div>
	)
}
CountValue.propTypes = {
	count: PropTypes.number.isRequired,
	setCount: PropTypes.func.isRequired
}

export default CountValue