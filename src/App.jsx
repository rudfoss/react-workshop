import { hot } from "react-hot-loader/root"

import React from "react"
import { createStore } from "./store/createStore"
import { Provider } from "react-redux"
import { duckMap } from "./ducks"
import Routes from "./routes"
import { BrowserRouter } from "react-router-dom"
import * as apis from "./api"

import "./App.global.scss"

export class App extends React.PureComponent {
	constructor(props) {
		super(props)
		window.app = this
		this.store = createStore()
		this.ducks = duckMap
		this.apis = apis
	}

	render() {
		return (
			<Provider store={this.store}>
				<BrowserRouter>
					<Routes/>
				</BrowserRouter>
			</Provider>
		)
	}
}

export default hot(App)