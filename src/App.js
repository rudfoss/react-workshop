import React from "react"
import UserForm from "./features/userForm"
import Users from "./features/users"
import omit from "lodash/omit"
import { uniqueId } from "./utils/uniqueId"
import newStore from "./store"
import { Provider } from "react-redux"

import Counter from "./features/examples/Counter.connector"

import "./App.scss"

export class App extends React.PureComponent {
	constructor(props) {
		super(props)
		this.store = newStore({
			count: 0,
			userForm: {
				name: "",
				email: "",
				type: "User",
				password: "",
				disabled: false,
				comments: ""
			},
			users: []
		})
		window.app = this
	}

	onUserFormPropChange = (prop, newValue) => {
		this.setState({
			[prop]: newValue
		})
	}
	onUserFormSave = () => {
		const newUser = omit(this.state, "users")
		newUser.id = uniqueId()

		this.setState({
			users: [
				...this.state.users,
				newUser
			]
		})
	}

	render() {
		return (
			<Provider store={this.store}>
				<Counter/>
				<UserForm/>
				<Users/>
			</Provider>
		)
	}
}