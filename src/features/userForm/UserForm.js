import React from "react"
import PropTypes from "prop-types"
import {LabelledField} from "../fields/LabelledField"
import { userEntity } from "../../entities/userEntity"

export class UserForm extends React.PureComponent{
	state = {
		showPassword: false
	}

	componentDidMount(){
		if (!this.props.user) this._applyUser()
	}
	componentDidUpdate(prevProps){
		if (prevProps.user) {
			if (!this.props.user) this._applyUser()
		}
	}
	_applyUser(){
		this.props.setNewUser()
	}

	render(){
		const {user, types} = this.props

		if (!user) return null

		return (
			<form onSubmit={this.onSubmit}>
				<div>
					Id: {user.id}
				</div>
				<div>
					Created: {new Date(user.created).toLocaleString("nb-no")}
				</div>
				<div>
					Modified: {new Date(user.modified).toLocaleString("nb-no")}
				</div>
				<LabelledField id="name" label="Name">
					<input type="text" value={user.name} onChange={this.onChange("name")}/>
				</LabelledField>
				<LabelledField id="email" label="Email">
					<input type="email" value={user.email} onChange={this.onChange("email")}/>
				</LabelledField>
				<LabelledField id="type" label="Type">
					<select value={user.type} onChange={this.onChange("type")}>
						{types.map((aType) => (
							<option key={aType} value={aType}>{aType}</option>
						))}
					</select>
				</LabelledField>
				<LabelledField id="password" label="Password">
					<input type={this.state.showPassword ? "text" : "password"} value={user.password} onChange={this.onChange("password")}/>
					<input type="checkbox" checked={this.state.showPassword} onChange={this.onShowPasswordChange}/>
				</LabelledField>
				<LabelledField id="disabled" label="Disabled">
					<input type="checkbox" checked={user.disabled} onChange={this.onCheckedChange("disabled")}/>
				</LabelledField>
				<LabelledField id="comments" label="Comments">
					<textarea value={user.comments} onChange={this.onChange("comments")}/>
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
		this.props.onPropChange(propName, evt.target.value)
	}
	onCheckedChange = (propName) => (evt) => {
		this.props.onPropChange(propName, evt.target.checked)
	}
	onShowPasswordChange = (evt) => {
		this.setState({
			showPassword: evt.target.checked
		})
	}

	static propTypes = {
		user: userEntity,
		types: PropTypes.arrayOf(PropTypes.string).isRequired,

		onPropChange: PropTypes.func,

		onSave: PropTypes.func,
		setNewUser: PropTypes.func
	}
}
export default UserForm