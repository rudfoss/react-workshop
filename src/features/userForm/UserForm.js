import React from "react"
import PropTypes from "prop-types"

export class UserForm extends React.PureComponent{
	state = {
		name: "",
		email: "",
		password: "",
		disabled: false
	}

	render(){
		return (
			<form>
				<input type="text" value={this.state.name} onChange={this.onChange("name")}/>
				<input type="email" value={this.state.email} onChange={this.onChange("email")}/>
				<input type="password" value={this.state.password} onChange={this.onChange("password")}/>
				<input type="checkbox" checked={this.state.disabled} onChange={this.onCheckedChange("disabled")}/>
			</form>
		)
	}

	onChange = (propName) => (evt) => {
		this.setState({
			[propName]: evt.target.value
		})
	}
	onCheckedChange = (propName) => (evt) => {
		this.setState({
			[propName]: evt.target.checked
		})
	}

	static propTypes = {
	}
}
export default UserForm