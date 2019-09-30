import React from "react"
import PropTypes from "prop-types"

const onChangeHandler = (handler) => (evt) => handler(evt.target.value)
const labelToId = (label) => label.replace(/[a-z0-9-_]/ig, "")

import classes from "./TextInput.scss"

export const TextInput = ({ id, label, type, value, onChange, ...rest }) => {
	id = id || labelToId(label)
	return (
		<div className={classes.formfield}>
			<label htmlFor={id}>{label}</label>
			{type === "textarea" ? (
				<textarea id={id} value={value} onChange={onChangeHandler(onChange)} {...rest}></textarea>
			) : (
				<input id={id} type={type} value={value} onChange={onChangeHandler(onChange)} {...rest}/>
			)}
		</div>
	)
}
TextInput.propTypes = {
	id: PropTypes.string,
	type: PropTypes.oneOf(["text", "password", "textarea"]),

	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired
}
TextInput.defaultProps = {
	type: "text",
	value: ""
}
export default TextInput