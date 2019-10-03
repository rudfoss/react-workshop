import React from "react"
import { createStore } from "redux"
import { Provider } from "react-redux"

const store = createStore((state, action) => {
	return state
}, {
	name: "",
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

export class AppRedux extends React.PureComponent{
	constructor(props) {
		super(props)
		this.store = store
		window.app = this
	}

	render() {
		return (
			<Provider store={store}>
				<ConnectedCreateUser/>
			</Provider>
		)
	}
}

export default AppRedux