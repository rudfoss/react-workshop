import React from "react"

export class UserForm extends React.PureComponent{
	state = {
		name: "",
		email: "",
		type: "User",
		password: "",
		disabled: false,
		comments: "",

		showPassword: false
	}

	onTargetValueChange = (stateProperty) => (evt) => {
		this.setState({
			[stateProperty]: evt.target.value
		})
	}
	onTargetCheckedChange = (stateProperty) => (evt) => {
		this.setState({
			[stateProperty]: evt.target.checked
		})
	}
	render(){
		const { name, email, type, password, showPassword, disabled, comments } = this.state

		return (
			<form action="/">
				<div>
					<label htmlFor="name_field">Name</label>
					<input
						id="name_field"
						type="text"
						value={name}
						onChange={this.onTargetValueChange("name")}/>
				</div>
				<div>
					<label htmlFor="email_field">Email</label>
					<input
						id="email_field"
						type="email"
						value={email}
						onChange={this.onTargetValueChange("email")}/>
				</div>
				<div>
					<label htmlFor="type_field">Type</label>
					<select id="type_field" value={type} onChange={this.onTargetValueChange("type")}>
						<option value="Read-only">Read-only</option>
						<option value="User">User</option>
						<option value="Manager">Manager</option>
						<option value="Administrator">Administrator</option>
						<option value="Sysadmin">Sysadmin</option>
					</select>
				</div>
				<div>
					<label htmlFor="password_field">Password</label>
					<input
						id="password_field"
						type={showPassword ? "text" : "password"}
						value={password}
						onChange={this.onTargetValueChange("password")}/>
					<input type="checkbox" checked={showPassword} onChange={this.onTargetCheckedChange("showPassword")}/>
				</div>
				<div>
					<label htmlFor="disabled_field">Disabled</label>
					<input
						id="disabled_field"
						type="checkbox"
						checked={disabled}
						onChange={this.onTargetCheckedChange("disabled")}/>
				</div>
				<div>
					<label htmlFor="comments_field">Comments</label>
					<textarea id="comments_field" value={comments} onChange={this.onTargetValueChange("comments")}/>
				</div>
			</form>
		)
	}
}
export default UserForm