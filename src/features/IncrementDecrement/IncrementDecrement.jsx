import React, { useState } from "react"

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
			<button onClick={decrementer}>Decrement</button>
			<button onClick={incrementer}>Increment</button>
		</div>
	)
}

export default IncrementDecrement