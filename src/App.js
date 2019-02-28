import React from "react"
import { createStore, history } from "./store/createStore"
import {Provider} from "react-redux"
import {ConnectedRouter} from "connected-react-router"
import Routes from "./routes"

import {ducks} from "./ducks"

import "./styles/App.scss"

export class App extends React.PureComponent {
	constructor() {
		super()
		this.store = createStore()
		window.app = this
	}

	get ducks() {
		return ducks
	}

	render() {
		return (
			<Provider store={this.store}>
				<ConnectedRouter history={history}>
					<Routes/>
				</ConnectedRouter>
			</Provider>
		)
	}
}
export default App