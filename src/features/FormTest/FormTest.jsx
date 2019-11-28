import React, { useState } from "react"

import TextFormField from "ui/TextFormField"
import PasswordFormField from "ui/PasswordFormField"
import SelectFormField from "ui/SelectFormField"

const OPTIONS = [
	{
		value: "alpha",
		label: "Alpha Alpha Alpha",
		num: 42,
		obj: {
			test: true
		}
	},
	{
		value: "bravo",
	},
	{
		value: "charlie",
		label: "CharLiE selection"
	}
]

export const FormTest = () => {
	const [textFormFieldValue, textFormFieldSetter] = useState("")
	const [passwordFormFieldValue, passwordFormFieldSetter] = useState("")
	const [choiceFormFieldValue, choiceFormFieldSetter] = useState(OPTIONS[1])

	return (
		<>
			<TextFormField
				label="Test text form field"
				value={textFormFieldValue}
				onChange={textFormFieldSetter}/>
			<PasswordFormField
				label="Password"
				value={passwordFormFieldValue}
				onChange={passwordFormFieldSetter}/>
			<SelectFormField
				label="Make a choice"
				options={OPTIONS}
				mode="radio"
				value={choiceFormFieldValue}
				onChange={choiceFormFieldSetter}/>
		</>
	)
}

export default FormTest