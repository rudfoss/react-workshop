import React from "react"
import PropTypes from "prop-types"

import classes from "./NumericInput.scss"

const onChangeHandler = (handler) => (evt) => handler(parseFloat(evt.target.value || 0))
const labelToId = (label) => label.replace(/[^a-z0-9-_]/ig, "").toLowerCase()

export const NumericInput = ({ id, label, value, onChange }) => {
	id = id || labelToId(label)
	return (
		<div className={classes.formField}>
			<label htmlFor={id}>{label}</label>
			<input id={id} type="number" value={value} onChange={onChangeHandler(onChange)}/>
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