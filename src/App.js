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
			userForm: {
				name: "",
				email: "",
				type: "User",
				password: "",
				disabled: false,
				comments: ""
			}
		})
		window.app = this
	}

	onUserFormPropChange = (prop, newValue) => {
		this.setState({
			[prop]: newValue
		})
	}

	render() {
		return (
			<Provider store={this.store}>
				<UserForm/>
				<Users/>
			</Provider>
		)
	}
}