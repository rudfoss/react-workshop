import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"

import CreateUser from "features/CreateUser"

const store = createStore((state, action) => {
	if (action.type === "changeProp"){
		return {
			...state,
			[action.payload.prop]: action.payload.newValue
		}
	}
	return state
}, {
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
})

import "./App.global.scss"

export class AppRedux extends React.PureComponent{
	constructor(props) {
		super(props)
		this.store = store
		window.app = this
	}
	
	render() {
		return (
			<Provider store={store}>
				<CreateUser/>
			</Provider>
		)
	}
}

export default AppRedux