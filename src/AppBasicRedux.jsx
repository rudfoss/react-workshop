import { hot } from "react-hot-loader/root"

import React from "react"
import { BrowserRouter } from "react-router-dom"

import AppFrame from "features/AppFrame"

import { store } from "./Redux"
import { Provider } from "react-redux"

import "./App.global.scss"

export class App extends React.PureComponent {
	constructor(props) {
		super(props)
		window.app = this
		this.store = store
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