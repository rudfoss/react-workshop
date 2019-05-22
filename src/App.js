import React from "react"
import UserForm from "./UserForm"

export class App extends React.PureComponent {
	constructor(props) {
		super(props)
		window.app = this
	}

	render() {
		return (
			<UserForm/>
		)
	}
}