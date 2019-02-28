import React from "react"
import UserList from "./components/UserList"
import NewUser from "./components/NewUser"
import { createStore } from "./store/createStore"
import {Provider} from "react-redux"

import "./styles/App.scss"

export class App extends React.PureComponent {
	constructor() {
		super()
		this.store = createStore()
		window.app = this
	}

	render() {
		return (
			<Provider store={this.store}>
				<UserList/>
				<NewUser/>
			</Provider>
		)
	}
}
export default App