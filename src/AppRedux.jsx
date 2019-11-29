import React from "react"

import { store } from "./Redux"
import { Provider } from "react-redux"

import Count from "features/IncrementDecrement"

export class AppRedux extends React.PureComponent {
	constructor(props) {
		super(props)
		window.app = this
		this.store = store
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