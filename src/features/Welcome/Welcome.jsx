import React, { useState } from "react"
import { Link } from "react-router-dom"

import { MyButton } from "../../MyButton"
import { TextInput } from "ui/TextInput"

export const Welcome = () => {
	const [count, setCount] = useState(0)
	const [text, setText] = useState("")
	return (
		<div>
			<h1>Welcome to the React Workshop Chat Application</h1>
			<p><Link to="/login">Please log in to proceeed</Link></p>
			<MyButton count={count} onClick={() => setCount(count+1)}/>
			<TextInput value={text} onChange={(newText) => {
				if (newText.indexOf("e") >= 0){
					return
				}
				setText(newText)
			}}/>
		</div>
	)
}

export default Welcome