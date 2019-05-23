import React from "react"
import UserForm from "./features/userForm"
import Users from "./features/users"

import "./App.scss"

export class App extends React.PureComponent {
	state = {
		name: "",
		email: "",
		type: "User",
		password: "",
		disabled: false,
		comments: "",
		
		users: [
			{
				name: "User 1",
				type: "User",
				disabled: false
			},
			{
				name: "User 2",
				type: "Administrator",
				disabled: true
			},
			{
				name: "User 3",
				type: "User",
				disabled: false
			}
		]
	}

	constructor(props) {
		super(props)
		window.app = this
	}

	onUserFormPropChange = (prop, newValue) => {
		this.setState({
			[prop]: newValue
		})
	}

	render() {
		const { name, email, type, password, disabled, comments } = this.state
		return (
			<>
				<UserForm
					name={name}
					email={email}
					type={type}
					password={password}
					disabled={disabled}
					comments={comments}
					onChange={this.onUserFormPropChange}/>
				<Users/>
			</>
		)
	}
}