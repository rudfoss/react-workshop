import React from "react"
import UserForm from "./UserForm"
import Counter from "./Counter"
import LoopExample from "./LoopExample"

export class App extends React.PureComponent {
	state = {
		count: 0,
		newCount: "0"
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
		const { count, newCount } = this.state
		
		return (
			<>
				<UserForm/>
				<LoopExample/>
				<Counter
					count={count}
					newCount={newCount}
					onIncrement={this.onIncrement}
					onNewCountChange={this.onTargetValueChange("newCount")}
					onSetCount={this.onSetCount}/>
			</>
		)
	}
}