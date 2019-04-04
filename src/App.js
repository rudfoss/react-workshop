/* eslint-disable no-console */

import React from "react"
import UserForm from "./features/userForm"
import Users from "./features/users"

const onEdit = (userId) => {
	console.log("You want to edit", userId)
}
const onRemove = (userId) => {
	console.log("You want to remove", userId)
}

export class App extends React.PureComponent {
	state = {
		users: [{
			id: "a-unique-id",
			name: "name",
			type: "type",
			disabled: false
		}]
	}

	render() {
		return (
			<div>
				<h1>Hello world</h1>
				<UserForm/>
				<Users
					users={this.state.users}
					onEditUser={onEdit}
					onRemoveUser={onRemove}/>
			</div>
		)
	}
}