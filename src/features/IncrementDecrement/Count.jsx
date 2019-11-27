import React, { useState } from "react"
import CountValue from "./CountValue"
import CountController from "./CountController"

export const Count = () => {
	const [count, setCount] = useState(0)

	return (
		<>
			<CountValue count={count}/>
			<CountController count={count} setCount={setCount}/>
		</>
	)
}

export default Count