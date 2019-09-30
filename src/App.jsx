import { hot } from "react-hot-loader/root"

import React from "react"

export class App extends React.PureComponent {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div>Hello world</div>
		)
	}
}

export default hot(App)