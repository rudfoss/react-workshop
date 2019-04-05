/* eslint-disable no-console */

import React from "react"
import UserForm from "./features/userForm"
import Users from "./features/users"
import { configureStore } from "./store/createStore"
import { Provider } from "react-redux"
import Counter from "./features/counter"

import "./App.scss"

const onEdit = (userId) => {
	console.log("You want to edit", userId)
}

export class App extends React.PureComponent {
	constructor() {
		super()
		this.store = configureStore({
			users: [
				{
					id: "test-user",
					name: "Test name",
					email: "test@email",
					disabled: false,
					comments: "no comments"
				}
			]
		})
		window.app = this
	}

	render() {
		return (
			<Provider store={this.store}>
				<div>
					<Counter buttonText="Increment state counter"/>
					<h1>Hello world</h1>
					<UserForm/>
					<hr/>
					<Users
						onEditUser={onEdit}/>
				</div>
			</Provider>
		)
	}

	onUserFormSave = (userData) => {
		console.log(userData)
		const newUsers = this.state.users.slice()
		newUsers.push(userData)
		this.setState({ users: newUsers })
	}
}