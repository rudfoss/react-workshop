import React, { useState } from "react"

const Increment = () => {
	const [count, setCount] = useState(0) // Destructuring
	// const count = countState[0]
	// const setCount = countState[1]

	const increment = () => {
		setCount(count + 1)
	}
	const oddOrEven = (count % 2 === 1) ? "odd" : "even"
	
	return (
		<div>
			<h1>{count}</h1>
			<p>{oddOrEven}</p>
			<button onClick={increment}>Increment</button>
		</div>
	)
}

class IncrementClass extends React.PureComponent {
	state = {
		count: 0
	}

	increment = () => {
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
		const oddOrEven = (this.state.count % 2 === 1) ? "odd" : "even"

		return (
			<div>
				<h1>{this.state.count}</h1>
				<p>{oddOrEven}</p>
				<button onClick={this.increment}>Increment</button>
			</div>
		)
	}
}

export default Increment