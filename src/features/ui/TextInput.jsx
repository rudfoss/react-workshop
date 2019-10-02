import React from "react"
import PropTypes from "prop-types"

export const TextInput = ({ value, onChange }) =>(
	<input
		type="text"
		value={value}
		onChange={(evt) => onChange(evt.target.value)}/>
)
TextInput.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired
}
TextInput.defaultProps = {
	value: ""
}

export default TextInput