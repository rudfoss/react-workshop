import React from "react"
import PropTypes from "prop-types"

const onTextChange = (onChange) => (evt) => {
	onChange(evt.target.value)
}

// const {id, label, value, onChange} = props
export const TextFormField = ({ id, label, value, onChange }) => (
	<div className="form-group">
		<label htmlFor={id}>{label}</label>
		<input
			className="form-control"
			id={id}
			type="text"
			value={value}
			onChange={onTextChange(onChange)}/>
	</div>
)
TextFormField.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired
}

export default TextFormField