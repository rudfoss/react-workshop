import React, { useState } from "react"

import Button from "./Button"

export const IncrementDecrement = () => {
	const [count, setCount] = useState(0)
	
	const incrementer = () => {
		setCount(count + 1)
	}
	const decrementer = () => {
		setCount(count - 1)
	}

	return (
		<div>
			<h1>{count}</h1>
			<Button onClick={decrementer}>Decrement</Button>
			<button onClick={incrementer}>Increment</button>
		</div>
	)
}

export default IncrementDecrement