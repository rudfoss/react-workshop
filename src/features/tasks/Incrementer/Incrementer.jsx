import React, { useState } from "react"

export const Incrementer = () => {
	const [count, setCount] = useState(0)
	const increment = () => {
		setCount(count+1)
	}

	return (
		<div>
			<span>Current count: {count}</span>
			<button className="btn btn-primary" onClick={increment}>Increment</button>
		</div>
	)
}

export default Incrementer