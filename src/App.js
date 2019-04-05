import React from "react"
import { Provider } from "react-redux"
import { ConnectedRouter, push } from "connected-react-router"
import { configureStore, history } from "./store/createStore"
import Routes from "./routes"
import { initialState } from "./store/initialState"
import { ducks } from "./store/rootReducer"
import HeaderFooterFrame from "./features/headerFooterFrame"

import "./App.scss"

export class App extends React.PureComponent{
	constructor(props) {
		super(props)
		this.store = configureStore(initialState)
		window.app = this
	}

	get ducks() {
		return ducks
	}
	get reduxStore() {
		return this.store.getState()
	}
	get dispatch() {
		return this.store.dispatch
	}
	get history() {
		return history
	}
	get push() {
		return push
	}

	render(){
		return (
			<Provider store={this.store}>
				<ConnectedRouter history={history}>
					<HeaderFooterFrame>
						<Routes/>
					</HeaderFooterFrame>
				</ConnectedRouter>
			</Provider>
		)
	}

	static propTypes = {
	}
}
export default App