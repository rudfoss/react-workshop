import React from "react"
import PropTypes from "prop-types"
import { userProps } from "../../entities/user"
import { LabelledField } from "../fields"

export class UserForm extends React.PureComponent{
	render(){
		const {user = {}, mode, types} = this.props
		return (
			<form onSubmit={this.onSubmit}>
				<h1>{mode} user</h1>
				<span>{user.id}</span>
				<LabelledField id="name" label="Name">
					<input type="text" value={user.name} onChange={this.onValueChange("name")}/>
				</LabelledField>
				<LabelledField id="email" label="Email">
					<input type="text" value={user.email} onChange={this.onValueChange("email")}/>
				</LabelledField>
				<LabelledField id="type" label="Type">
					<select value={user.type} onChange={this.onValueChange("type")}>
						{types.map((type) => (
							<option key={type} value={type}>{type}</option>
						))}
					</select>
				</LabelledField>
				<LabelledField id="password" label="Password">
					<input type="password" value={user.password} onChange={this.onValueChange("password")}/>
				</LabelledField>
				<LabelledField id="disabled" label="Disabled">
					<input type="checkbox" checked={user.disabled} onChange={this.onCheckboxChange("disabled")}/>
				</LabelledField>
				<LabelledField id="comments" label="Comments">
					<textarea value={user.comments} onChange={this.onValueChange("comments")}/>
				</LabelledField>
				<button type="submit">Save</button>
				<button type="button" onClick={this.props.onCancel}>Back</button>
			</form>
		)
	}

	onCheckboxChange = (name) => (evt) => {
		this.props.onFieldChange(name, evt.target.checked)
	}
	onValueChange = (name) => (evt) => {
		this.props.onFieldChange(name, evt.target.value)
	}
	onSubmit = (evt) => {
		evt.preventDefault()
		this.props.onSave()
	}

	static defaultProps = {
		mode: "New",
		types: []
	}
	static propTypes = {
		user: userProps,
		types: PropTypes.arrayOf(PropTypes.string),
		mode: PropTypes.oneOf(["New", "Edit"]),
		onFieldChange: PropTypes.func.isRequired,
		onSave: PropTypes.func.isRequired,
		onCancel: PropTypes.func.isRequired
	}
}
export default UserForm