import React from "react"

export class Counter extends React.PureComponent {
	state = {
		count: 0,
		newCount: "0"
	}

	onIncrement = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	onSetCount = () => {
		this.setState({
			count: parseFloat(this.state.newCount)
		})
	}
	onNewCountChange = (evt) => {
		this.setState({
			newCount: evt.target.value
		})
	}
	render() {
		return (
			<>
				<span>{this.state.count}</span>
				<button
					type="button"
					onClick={this.onIncrement}>Increment</button>
				<fieldset>
					<legend>New count</legend>
					<input type="text" value={this.state.newCount} onChange={this.onNewCountChange}/>
					<button type="button" onClick={this.onSetCount}>Set</button>
				</fieldset>
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
