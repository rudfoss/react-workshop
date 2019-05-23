import React from "react"
import UserForm from "./UserForm"
import Users from "./Users"

export class App extends React.PureComponent {
	state = {
		count: 0,
		newCount: "0",

		users: [
			{
				name: "User 1",
				type: "User",
				disabled: false
			},
			{
				name: "User 2",
				type: "Administrator",
				disabled: true
			},
			{
				name: "User 3",
				type: "User",
				disabled: false
			}
		]
	}

	constructor(props) {
		super(props)
		window.app = this
	}

	onIncrement = () => {
		this.setState({
			count: this.state.count + 1
		})
	}
	onTargetValueChange = (stateProp) => (evt) => {
		this.setState({
			[stateProp]: evt.target.value
		})
	}
	onSetCount = () => {
		this.setState({
			count: parseFloat(this.state.newCount)
		})
	}

	render() {
		return (
			<>
				<UserForm/>
				<Users/>
			</>
		)
	}
}