import React from "react"
import PropTypes from "prop-types"

import classes from "./TextInput.scss"

const handleChange = (onChange) => (evt) => {
	onChange(evt.target.value)
}
const labelToId = (label) =>
	label.replace(/[^a-z0-9-_]/ig, "")

export const TextInput = ({ id, label, type, value, onChange, ...rest }) => {
	id = id || labelToId(label)
	return (
		<div className={classes.formField}>
			<label htmlFor={id}>{label}</label>
			{type === "textarea" ? (
				<textarea
					{...rest}
					id={id}
					type="text"
					value={value}
					onChange={handleChange(onChange)}></textarea>
			) : (
				<input
					{...rest}
					id={id}
					type={type}
					value={value}
					onChange={handleChange(onChange)}/>
			)}
		</div>
	)
}
TextInput.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string.isRequired,

	type: PropTypes.oneOf(["text", "password", "textarea"]),

	value: PropTypes.string,
	onChange: PropTypes.func.isRequired
}
TextInput.defaultProps = {
	value: "",
	type: "text"
}

export default TextInput