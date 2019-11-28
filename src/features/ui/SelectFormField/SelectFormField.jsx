import React from "react"
import PropTypes from "prop-types"

import FormField from "ui/FormField"

const passOptionFromElementValue = (options, onChange) => (evt) => {
	const selectedOption = options.find((option) => (
		option.value === evt.target.value
	))
	onChange(selectedOption || options[0])
}

const renderDropDown = (options, value, onChange) => (
	<select
		value={(value || options[0]).value}
		onChange={passOptionFromElementValue(options, onChange)}>
		{options.map((option) => (
			<option
				key={option.value}
				value={option.value}>{option.label || option.value}</option>
		))}
	</select>
)

const makeSafeRadioId = (label, value) => (
	label.toLowerCase().replace(/[^a-z0-9-]/ig, "-")+value
)
const renderRadioButtons = (label, options, value, onChange) => (
	<>
		{options.map((option) => (
			<div key={option.value} className="form-check">
				<input type="radio"
					className="form-check-input"
					name={label}
					id={makeSafeRadioId(label, option.value)}
					value={option.value}
					checked={option.value === value.value}
					onChange={passOptionFromElementValue(options, onChange)}/>
				<label
					className="form-check-label"
					htmlFor={makeSafeRadioId(label, option.value)}>{option.label || option.value}</label>
			</div>
		))}
	</>
)

export const SelectFormField = ({ id, label, mode, options, value, onChange }) => (
	<FormField id={id} label={label}>
		{mode === "radio" ?
			renderRadioButtons(label, options, value, onChange) : 
			renderDropDown(options, value, onChange)}
	</FormField>
)
SelectFormField.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string.isRequired,

	mode: PropTypes.oneOf(["choice", "radio"]),
	options: PropTypes.arrayOf(PropTypes.shape({
		value: PropTypes.string.isRequired,
		label: PropTypes.string
	})).isRequired,
	value: PropTypes.shape({
		value: PropTypes.string.isRequired,
		label: PropTypes.string
	}),
	onChange: PropTypes.func.isRequired
}
SelectFormField.defaultProps = {
	mode: "choice"
}

export default SelectFormField