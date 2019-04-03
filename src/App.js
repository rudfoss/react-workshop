import React from "react"
import { UserForm } from "./features/userForm/UserForm"

export class App extends React.PureComponent {
	state = {
		counter: 0
	}

	render() {
		return (
			<div>
				<h1>Hello world</h1>
				<UserForm
					count={this.state.counter}
					incrementCounter={this.incrementState}>
					<div>Test</div>
				</UserForm>
			</div>
		)
	}

	incrementState = () => {
		this.setState({
			counter: this.state.counter + 1
		})
	}
}