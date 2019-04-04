import React from "react"
import PropTypes from "prop-types"
import { userProps } from "../../entities/user"
import { LabelledField } from "../fields"
import classes from "./UserForm.scss"

export class UserForm extends React.PureComponent{
	state = {
		showPassword: false
	}

	render(){
		const {user, mode, types} = this.props
		if (!user) {
			return null
		}

		return (
			<form onSubmit={this.onSubmit} className={classes.form}>
				<h2>{mode === "new" ? "New" : "Edit"} user</h2>
				<div className={classes.id}>{user.id}</div>
				{mode === "edit" && (
					<div>
						Created: {new Date(user.created).toLocaleString("nb-no")}
					</div>
				)}
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
					<input type={this.state.showPassword ? "text" : "password"} value={user.password} onChange={this.onValueChange("password")}/>
					<input type="checkbox" checked={this.state.showPassword} onChange={this.togglePasswordShow}/>
				</LabelledField>
				<LabelledField id="disabled" label="Disabled">
					<input type="checkbox" checked={user.disabled} onChange={this.onCheckboxChange("disabled")}/>
				</LabelledField>
				<LabelledField id="comments" label="Comments">
					<textarea value={user.comments} onChange={this.onValueChange("comments")}/>
				</LabelledField>
				<button type="submit">Save</button>
			</form>
		)
	}

	componentDidMount() {
		this._applyUser()
	}
	componentDidUpdate(prevProps) {
		if (this.props.mode !== prevProps.mode) {
			this._applyUser()
		}
	}
	_applyUser() {
		if (this.props.mode === "edit") {
			this.props.setUser()
			return
		}
		this.props.setNewUser()
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
	togglePasswordShow = () => {
		this.setState({
			showPassword: !this.state.showPassword
		})
	}

	static defaultProps = {
		mode: "new",
		types: []
	}
	static propTypes = {
		user: userProps,
		types: PropTypes.arrayOf(PropTypes.string),
		mode: PropTypes.oneOf(["new", "edit"]),
		onFieldChange: PropTypes.func.isRequired,

		setUser: PropTypes.func.isRequired,
		setNewUser: PropTypes.func.isRequired,

		onSave: PropTypes.func.isRequired
	}
}
export default UserForm