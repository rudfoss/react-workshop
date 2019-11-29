import React from "react"

import { store } from "./Redux"
import { Provider } from "react-redux"

import Count from "features/IncrementDecrement"
import { myFirstGenerator } from "./generators"

export class AppRedux extends React.PureComponent {
	constructor(props) {
		super(props)
		window.app = this
		this.store = store
		this.generator = myFirstGenerator
	}

	render() {
		return (
			<Provider store={this.store}>
				<Count/>
			</Provider>
		)
	}
}

export default AppRedux