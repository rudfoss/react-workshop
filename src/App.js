import React from "react"
import {Provider} from "react-redux"
import {ConnectedRouter} from "connected-react-router"
import {createStore, history} from "./store"
import {ducks} from "./ducks"
import {load, save} from "./store/persistent"

import Routes from "./routes"

import "./styles/App.global.scss"

export class App extends React.PureComponent{
	constructor(props){
		super(props)
		this.setup()
		window.app = this
	}

	get ducks() {
		return ducks
	}
	get storeState() {
		return this.store.getState()
	}
	get dispatch() {
		return this.store.dispatch
	}

	async test() {
		await fetch("/")
	}

	setupRedux(){
		this.store = createStore(load())
		this.store.subscribe(this.saveState)
		this.history = history
		window.app = this
	}
	saveState = () => {
		const state = this.store.getState()
		save(state)
	}
	setup(){
		this.setupRedux()
	}

	render(){
		return (
			<Provider store={this.store}>
				<ConnectedRouter history={this.history}>
					<Routes/>
				</ConnectedRouter>
			</Provider>
		)
	}
}

export default App