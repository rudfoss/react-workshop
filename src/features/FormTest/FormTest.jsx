import React, { useState } from "react"
import TextFormField from "ui/TextFormField"

export const FormTest = () => {
	const [textFormFieldValue, textFormFieldSetter] = useState("")

	return (
		<>
			<TextFormField
				id="test"
				label="Test text form field"
				value={textFormFieldValue}
				onChange={textFormFieldSetter}/>
		</>
	)
}

export default FormTest