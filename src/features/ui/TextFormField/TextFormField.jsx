import React from "react"
import PropTypes from "prop-types"

import FormField from "ui/FormField"

const onTextChange = (onChange) => (evt) => {
	onChange(evt.target.value)
}
// const {id, label, value, onChange} = props
export const TextFormField = ({ id, label, value, onChange }) => (
	<FormField id={id} label={label}>
		<input
			className="form-control"
			type="text"
			value={value}
			onChange={onTextChange(onChange)}/>
	</FormField>
)
TextFormField.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired
}

export default TextFormField