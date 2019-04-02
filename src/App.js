import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { configureStore } from "./store/createStore"
import Routes from "./routes"
import { initialState } from "./store/initialState"

export class App extends React.PureComponent{
	constructor(props) {
		super(props)
		this.store = configureStore(initialState)
		window.app = this
	}

	get reduxStore() {
		return this.store.getState()
	}

	render(){
		return (
			<Provider store={this.store}>
				<BrowserRouter>
					<Routes/>
				</BrowserRouter>
			</Provider>
		)
	}

	static propTypes = {
	}
}
export default App