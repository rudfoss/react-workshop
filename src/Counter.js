import React from "react"

export class Counter extends React.PureComponent {
	state = {
		count: 0
	}

	onIncrement = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	render() {
		return (
			<>
				<span>{this.state.count}</span>
				<button
					type="button"
					onClick={this.onIncrement}>Increment</button>
			</>
		)
	}
}
export default Counter

/*
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
}*/
