import React, { useState } from "react"

export const Counter = () => {
	const [count, setCount] = useState(0)

	return (
		<>
			<span>{count}</span>
			<button
				type="button"
				onClick={() => setCount(count + 1)}>Increment</button>
		</>
	)
}