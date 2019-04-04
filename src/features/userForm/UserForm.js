import React from "react"
import PropTypes from "prop-types"
import {LabelledField} from "../fields/LabelledField"

export class UserForm extends React.PureComponent{
	state = {
		id: "id",
		name: "",
		email: "",
		password: "",
		disabled: false,
		comments: "",
		created: Date.now(),
		modified: Date.now(),
		type: "",

		types: ["Read-only", "User", "Manager", "Administrator", "Sysadmin"],
		showPassword: false
	}

	render(){
		return (
			<form onSubmit={this.onSubmit}>
				<div>
					Id: {this.state.id}
				</div>
				<div>
					Created: {new Date(this.state.created).toLocaleString("nb-no")}
				</div>
				<div>
					Modified: {new Date(this.state.modified).toLocaleString("nb-no")}
				</div>
				<LabelledField id="name" label="Name">
					<input type="text" value={this.state.name} onChange={this.onChange("name")}/>
				</LabelledField>
				<LabelledField id="email" label="Email">
					<input type="email" value={this.state.email} onChange={this.onChange("email")}/>
				</LabelledField>
				<LabelledField id="type" label="Type">
					<select value={this.state.type} onChange={this.onChange("type")}>
						{this.state.types.map((aType) => (
							<option key={aType} value={aType}>{aType}</option>
						))}
					</select>
				</LabelledField>
				<LabelledField id="password" label="Password">
					<input type={this.state.showPassword ? "text" : "password"} value={this.state.password} onChange={this.onChange("password")}/>
					<input type="checkbox" checked={this.state.showPassword} onChange={this.onCheckedChange("showPassword")}/>
				</LabelledField>
				<LabelledField id="disabled" label="Disabled">
					<input type="checkbox" checked={this.state.disabled} onChange={this.onCheckedChange("disabled")}/>
				</LabelledField>
				<LabelledField id="comments" label="Comments">
					<textarea value={this.state.comments} onChange={this.onChange("comments")}/>
				</LabelledField>
				<button>Save</button>
			</form>
		)
	}

	onSubmit = (evt) => {
		evt.preventDefault()

		const data = {
			id: this.state.id,
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			disabled: this.state.disabled,
			comments: this.state.comments,
			created: this.state.created,
			modified: this.state.modified,
		}

		this.props.onSave(data)
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
		onSave: PropTypes.func
	}
}
export default UserForm