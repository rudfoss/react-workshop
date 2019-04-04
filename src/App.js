/* eslint-disable no-console */

import React from "react"
import UserForm from "./features/userForm"
import Users from "./features/users"
import { configureStore } from "./store/createStore"
import { Counter } from "./Counter"
import { Provider } from "react-redux"

const onEdit = (userId) => {
	console.log("You want to edit", userId)
}
const onRemove = (userId) => {
	console.log("You want to remove", userId)
}

export class App extends React.PureComponent {
	state = {
		users: []
	}

	constructor() {
		super()
		this.store = configureStore()
		window.app = this
	}

	render() {
		return (
			<Provider store={this.store}>
				<div>
					<button onClick={this.incrementCounter}>Count up</button>
					<Counter count={0}/>
					<h1>Hello world</h1>
					<UserForm onSave={this.onUserFormSave}/>
					<hr/>
					<Users
						users={this.state.users}
						onEditUser={onEdit}
						onRemoveUser={onRemove}/>
				</div>
			</Provider>
		)
	}

	incrementCounter = () => {
		this.store.dispatch({
			type: "INCREMENT_COUNTER"
		})
	}

	onUserFormSave = (userData) => {
		console.log(userData)
		const newUsers = this.state.users.slice()
		newUsers.push(userData)
		this.setState({ users: newUsers })
	}
}