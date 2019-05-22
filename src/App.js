import React from "react"

export class App extends React.PureComponent {
	constructor(props) {
		super(props)
		window.app = this
	}

	render() {
		return (
			<div>Hello world</div>
		)
	}
}