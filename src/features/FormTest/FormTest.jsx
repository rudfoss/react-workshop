import React, { useState } from "react"

import TextFormField from "ui/TextFormField"
import PasswordFormField from "ui/PasswordFormField"

export const FormTest = () => {
	const [textFormFieldValue, textFormFieldSetter] = useState("")
	const [passwordFormFieldValue, passwordFormFieldSetter] = useState("")

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
		</>
	)
}

export default FormTest