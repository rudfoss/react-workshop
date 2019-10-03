import React from "react"
import { Provider } from "react-redux"
import { createStore } from "./store/createStore2"

import CreateUser from "features/CreateUser"

const INITIAL_STATE = {
	name: "hello world",
	email: "",
	password: "",
	retypePassword: "",
	nickname: "",
	age: 0,
	level: {
		label: "Peon",
		value: "peon"
	}
}

import "./App.global.scss"

export class AppRedux extends React.PureComponent{
	constructor(props) {
		super(props)
		this.store = createStore(INITIAL_STATE)
		window.app = this
	}

	render() {
		return (
			<Provider store={this.store}>
				<CreateUser/>
			</Provider>
		)
	}
}

export default AppRedux