import React from "react"
import { configureStore } from "./store/createStore"
import { Provider } from "react-redux"
import { ducks } from "./store/rootReducer"
import { BrowserRouter } from "react-router-dom"
import Routes from "./routes"

import "./App.scss"

export class App extends React.PureComponent {
	constructor() {
		super()
		this.store = configureStore({
			users: {
				order: ["test-user"],
				byId: {
					"test-user": {
						id: "test-user",
						name: "Test name",
						email: "test@email",
						disabled: false,
						comments: "no comments"
					}
				}
			}
		})
		window.app = this
	}

	get ducks() {
		return ducks
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