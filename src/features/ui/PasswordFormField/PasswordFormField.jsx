import React, { useState } from "react"
import PropTypes from "prop-types"

const onTextChange = (onChange) => (evt) => {
	onChange(evt.target.value)
}
const onCheckboxChange = (onChange) => (evt) => {
	onChange(evt.target.checked)
}

const genId = (() => {
	let id = 0
	return () => {
		return "passwordfield-"+(id++)
	}
})()

// const {id, label, value, onChange} = props
export const PasswordFormField = ({ id, label, canShowPassword, value, onChange }) => {
	const [showPassword, setShowPassword] = useState(false)
	const realId = id || genId()
	return (
		<div className="form-group">
			<label htmlFor={realId}>{label}</label>
			<input
				className="form-control"
				id={realId}
				type={showPassword ? "text" : "password"}
				value={value}
				onChange={onTextChange(onChange)}/>
			{canShowPassword && (
				<input
					type="checkbox"
					value={showPassword}
					onChange={onCheckboxChange(setShowPassword)}/>
			)}
		</div>
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