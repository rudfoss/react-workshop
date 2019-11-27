import React, { useState } from "react"

import Count from "./Count"
import Incrementer from "./Incrementer"

export const Container = () => {
	const [count, setCount] = useState(0)
	const increment = () => { setCount(count+1) }
	const decrement = () => { setCount(count-1) }

	return (
		<div>
			<Count count={count}/>
			<Incrementer increment={increment} decrement={decrement}/>
		</div>
	)
}

export default Container