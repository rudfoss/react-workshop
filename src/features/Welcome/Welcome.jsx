import React, { useState } from "react"
import { Link } from "react-router-dom"

import { MyButton } from "../../MyButton"
import TextInput from "ui/TextInput"
import NumericInput from "ui/NumericInput"

const CHOICES = [
	{
		label: "Peon",
		value: "peon"
	},
	{
		label: "Worker",
		value: "worker"
	},
	{
		label: "Steward",
		value: "steward"
	},
	{
		label: "King",
		value: "king"
	}
]

export const Welcome = () => {
	const [count, setCount] = useState(0)
	const [text, setText] = useState("")
	const [choice, setChoice] = useState({
		label: "Peon",
		value: "peon"
	})
	
	return (
		<div>
			<h1>Welcome to the React Workshop Chat Application</h1>
			<p><Link to="/login">Please log in to proceeed</Link></p>
			<MyButton count={count} onClick={() => setCount(count+1)}/>
			<TextInput type="password" label="Text" value={text} onChange={setText}/>
			<NumericInput label="Counter" value={count} onChange={setCount}/>
			<RadioInput choices={CHOICES} value={choice} onChange={setChoice}/>
		</div>
	)
}

export default Welcome