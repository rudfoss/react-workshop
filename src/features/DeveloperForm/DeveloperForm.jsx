/* eslint-disable react/prop-types */
import React from "react"

import TextFormField from "ui/TextFormField"
import SelectFormField from "ui/SelectFormField"

const preventDefault = (onEvent) => (evt) => {
	evt.preventDefault()
	onEvent()
}

export const DeveloperForm = ({
	name, phoneNumber, language, experience, comments,
	languages, experiences,
	onNameChange, onPhoneChange, onLangChange, onExpChange, onCommentsChange,
	onSubmit
}) => {
	const submitData = () => {
		onSubmit({
			name, phoneNumber, language, experience, comments
		})
	}
	return (
		<form onSubmit={preventDefault(submitData)}>
			<TextFormField label="Name" value={name} onChange={onNameChange}/>
			<TextFormField label="Phone number" value={phoneNumber} onChange={onPhoneChange}/>
			<SelectFormField
				label="Preferred language"
				options={languages}
				value={language}
				onChange={onLangChange}/>
			<SelectFormField
				label="Experience"
				options={experiences}
				value={experience}
				onChange={onExpChange}/>
			<TextFormField label="Comments" value={comments} onChange={onCommentsChange}/>
			<button>Submit</button>
		</form>
	)
}

export default DeveloperForm