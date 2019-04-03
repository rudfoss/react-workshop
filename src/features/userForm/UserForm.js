import React from "react"
import PropTypes from "prop-types"

export class UserForm extends React.PureComponent{
	state = {
		counter: 0,
		name: ""
	}

	render(){
		return (
			<form>
				<input type="text" value={this.state.name} onChange={this.onNameChange}/>
				<button type="button" onClick={this.onCounterClick}>Counted {this.state.counter} times</button>
			</form>
		)
	}

	onCounterClick = () => {
		this.setState({
			counter: this.state.counter + 1,
		})
	}
	onNameChange = (evt) => {
		this.setState({
			name: evt.target.value
		})
	}

	static propTypes = {
	}
}
export default UserForm