import React from "react"
import PropTypes from "prop-types"
import {LabelledField} from "../fields/LabelledField"

export class UserForm extends React.PureComponent{
	state = {
		name: "",
		email: "",
		password: "",
		disabled: false,
		id: "id",
		comments: "",
		created: Date.now(),
		modified: Date.now(),
		type: "",
		types: ["Read-only", "User", "Manager", "Administrator", "Sysadmin"]
	}

	render(){
		return (
			<form>
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
					<input type="password" value={this.state.password} onChange={this.onChange("password")}/>
				</LabelledField>
				<LabelledField id="disabled" label="Disabled">
					<input type="checkbox" checked={this.state.disabled} onChange={this.onCheckedChange("disabled")}/>
				</LabelledField>
				<LabelledField id="comments" label="Comments">
					<textarea value={this.state.comments} onChange={this.onChange("comments")}/>
				</LabelledField>
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