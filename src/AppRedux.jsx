import React from "react"

import { store } from "./Redux"

import Increment from "features/Increment/Increment.connector"
import { Provider } from "react-redux"

export class AppRedux extends React.PureComponent {
	constructor(props) {
		super(props)
		window.app = this
		this.store = store
	}

	render() {
		return (
			<Provider store={this.store}>
				<Increment/>
			</Provider>
		)
	}
}

export default AppRedux