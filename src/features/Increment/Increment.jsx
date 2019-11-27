import React from "react"

const Increment = () => (
	<div>Hello world</div>
)

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
		return (
			<div>
				<h1>{this.state.count}</h1>
				<p>odd / even</p>
				<button onClick={this.increment}>Increment</button>
			</div>
		)
	}
}

export default IncrementClass