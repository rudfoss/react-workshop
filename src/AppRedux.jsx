import React from "react"
import { Provider } from "react-redux"
import { createStore } from "./store/createStore2"
import { BrowserRouter } from "react-router-dom"

import Routes from "./routes"

const INITIAL_STATE = {}

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
				<BrowserRouter>
					<Routes/>
				</BrowserRouter>
			</Provider>
		)
	}
}

export default AppRedux