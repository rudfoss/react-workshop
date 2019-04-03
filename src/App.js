import React from "react"
import { UserForm } from "./features/userForm/UserForm"

export class App extends React.PureComponent {
	render() {
		return (
			<div>
				<h1>Hello world</h1>
				<UserForm/>
			</div>
		)
	}
}