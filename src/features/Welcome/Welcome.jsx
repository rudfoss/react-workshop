import React, { useState } from "react"
import { Link } from "react-router-dom"

import { MyButton } from "../../MyButton"
import TextInput from "ui/TextInput"
import NumericInput from "ui/NumericInput"

export const Welcome = () => {
	const [count, setCount] = useState(0)
	const [text, setText] = useState("")
	return (
		<div>
			<h1>Welcome to the React Workshop Chat Application</h1>
			<p><Link to="/login">Please log in to proceeed</Link></p>
			<MyButton count={count} onClick={() => setCount(count+1)}/>
			<TextInput label="Text" value={text} onChange={setText}/>
			<NumericInput label="Counter" value={count} onChange={setCount}/>
		</div>
	)
}

export default Welcome