import React from "react"
import PropTypes from "prop-types"

import classes from "./TextInput.scss"

const labelToId = (label) =>
	label.replace(/[^a-z0-9-_]/ig, "")

export const TextInput = ({ id, label, type, value, onChange }) => {
	id = id || labelToId(label)
	return (
		<div className={classes.formField}>
			<label htmlFor={id}>{label}</label>
			{type === "textarea" ? (
				<div></div>
			) : (
				<input
					id={id}
					type="text"
					value={value}
					onChange={(evt) => onChange(evt.target.value)}/>
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