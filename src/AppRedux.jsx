import React from "react"

import { store } from "./Redux"

import MyForm from "features/MyForm"
import { Provider } from "react-redux"

// Sets the element that should be hidden if modal is open.
import ReactModal from "react-modal"
ReactModal.setAppElement("#app")

export class AppRedux extends React.PureComponent {
	constructor(props) {
		super(props)
		window.app = this
		this.store = store
	}

	render() {
		return (
			<Provider store={this.store}>
				<MyForm/>
			</Provider>
		)
	}
}

export default AppRedux