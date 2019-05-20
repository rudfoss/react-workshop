import React from "react"
import PropTypes from "prop-types"
import User from "./features/User"
import newStore from "./store"
import { ducks } from "./ducks"
import { Provider } from "react-redux"

export class App extends React.PureComponent{
	constructor(props) {
		super(props)
		this.store = newStore()
		window.app = this
	}

	get ducks() {
		return ducks
	}

	render(){
		return (
			<Provider store={this.store}>
				<User/>
			</Provider>
		)
	}

	static propTypes = {
	}
}
export default App