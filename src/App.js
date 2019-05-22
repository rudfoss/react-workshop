import React from "react"
import { Counter } from "./Counter"

export class App extends React.PureComponent {
	constructor(props) {
		super(props)
		window.app = this
	}

	render() {
		return (
			<Counter/>
		)
	}
}