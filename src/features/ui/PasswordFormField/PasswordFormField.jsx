import React, { useState } from "react"
import PropTypes from "prop-types"

import FormField from "ui/FormField"

const onTextChange = (onChange) => (evt) => {
	onChange(evt.target.value)
}
const onCheckboxChange = (onChange) => (evt) => {
	onChange(evt.target.checked)
}

// const {id, label, value, onChange} = props
export const PasswordFormField = ({ id, label, canShowPassword, value, onChange }) => {
	const [showPassword, setShowPassword] = useState(false)
	return (
		<FormField id={id} label={label}>
			<input
				className="form-control"
				type={showPassword ? "text" : "password"}
				value={value}
				onChange={onTextChange(onChange)}/>
			{canShowPassword && (
				<input
					type="checkbox"
					value={showPassword}
					onChange={onCheckboxChange(setShowPassword)}/>
			)}
		</FormField>
	)
}
PasswordFormField.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string.isRequired,
	canShowPassword: PropTypes.bool,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired
}
PasswordFormField.defaultProps = {
	canShowPassword: true
}

export default PasswordFormField