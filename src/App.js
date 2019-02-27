import React from "react"
import InputTest from "./InputTest"

export class App extends React.PureComponent {
	state = {
		name: ""
	}

	onNameChange = (name) => {
		this.setState({
			name
		})
	}

	render() {
		return (
			<>
				<h2>Enter your name</h2>
				<p>Hello {this.state.name}</p>
				<div>
					<InputTest
						name={this.state.name}
						onChange={this.onNameChange}/>
				</div>
			</>
		)
	}
}
export default App