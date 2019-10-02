import React from "react"
import PropTypes from "prop-types"

const onChangeHandler = (handler) => (evt) => handler(evt.target.value)
const labelToId = (label) => label.replace(/[^a-z0-9-_]/ig, "").toLowerCase()

import classes from "./TextInput.scss"

export const TextInput = ({ id, label, type, className, value, onChange, ...rest }) => {
	id = id || labelToId(label)
	return (
		<div className={`${classes.formField} ${className}`}>
			<label htmlFor={id}>{label}</label>
			{type === "textarea" ? (
				<textarea
					{...rest}
					id={id}
					value={value}
					onChange={onChangeHandler(onChange)}></textarea>
			) : (
				<input
					{...rest}
					id={id}
					type={type}
					value={value}
					onChange={onChangeHandler(onChange)}/>
			)}
		</div>
	)
}
TextInput.propTypes = {
	id: PropTypes.string,
	type: PropTypes.oneOf(["text", "password", "textarea"]),
	className: PropTypes.string,

	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired
}
TextInput.defaultProps = {
	className: "",
	type: "text",
	value: ""
}
export default TextInput