import { hot } from "react-hot-loader/root"

import React from "react"
import { createStore } from "./store/createStore"
import { Provider } from "react-redux"
import { duckMap } from "./ducks"
import { BrowserRouter } from "react-router-dom"

import AppFrame from "features/AppFrame"

import "./App.global.scss"

export class App extends React.PureComponent {
	constructor(props) {
		super(props)
		window.app = this
		this.store = createStore({
			name: "",
			description: "",
			role: undefined,
		
			roles: [
				{
					value: "admin",
					label: "Administrator"
				},
				{
					value: "user",
					label: "User"
				}
			]
		})
		this.ducks = duckMap
	}

	render() {
		return (
			<Provider store={this.store}>
				<BrowserRouter>
					<AppFrame/>
				</BrowserRouter>
			</Provider>
		)
	}
}

export default hot(App)