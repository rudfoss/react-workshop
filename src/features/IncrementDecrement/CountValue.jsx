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

export const CountValue = (props) => {
	return (
		<div className="form-group">
			<label>Count</label>
			<input
				type="text"
				className="form-control"
				value={props.count}
				/* onChange={(evt) => onNumericInputChange(evt, props.setCount)} */
				onChange={onNumericInputChange(props.setCount)}/>
		</div>
	)
}
CountValue.propTypes = {
	count: PropTypes.number.isRequired,
	setCount: PropTypes.func.isRequired
}

export default CountValue