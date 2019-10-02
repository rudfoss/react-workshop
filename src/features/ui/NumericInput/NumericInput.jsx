import React from "react"
import PropTypes from "prop-types"

import classes from "./NumericInput.scss"

const handleChange = (onChange) => (evt) => {
	onChange(parseInt(evt.target.value || 0))
}
const labelToId = (label) =>
	label.replace(/[^a-z0-9-_]/ig, "")

export const NumericInput = ({ id, label, value, onChange }) => {
	id = id || labelToId(label)
	return (
		<div className={classes.formField}>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type="number"
				value={value}
				onChange={handleChange(onChange)}/>
		</div>
	)
}
NumericInput.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string.isRequired,

	value: PropTypes.number,
	onChange: PropTypes.func.isRequired
}
NumericInput.defaultProps = {
	value: 0
}

export default NumericInput