import React from "react"
import PropTypes from "prop-types"

const onTextChange = (onChange) => (evt) => {
	onChange(evt.target.value)
}

const genId = (() => {
	let id = 0
	return () => {
		return "textfield-"+(id++)
	}
})()

// const {id, label, value, onChange} = props
export const TextFormField = ({ id, label, value, onChange }) => {
	const realId = id || genId()
	return (
		<div className="form-group">
			<label htmlFor={realId}>{label}</label>
			<input
				className="form-control"
				id={realId}
				type="text"
				value={value}
				onChange={onTextChange(onChange)}/>
		</div>
	)
}
TextFormField.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string.isRequired,
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired
}

export default TextFormField