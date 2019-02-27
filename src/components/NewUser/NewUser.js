import React from "react"
import PropTypes from "prop-types"
import Field from "../Field"
import DescriptionField from "../DescriptionField"
import Controls from "../Controls"
import Avatar from "../Avatar"

export class NewUser extends React.PureComponent{
	state = {
		avatar: "",
		name: "",
		type: "",
		description: "",
		types: ["Admin", "Elevated", "User", "Guest"]
	}

	render(){
		const {
			avatar, name, type, description, types
		} = this.state

		return (
			<form onSubmit={this.onSubmit}>
				<Field label="Avatar" id="new-user-avatar">
					<input type="text" autoFocus value={avatar} onChange={this.onChangeEvt("avatar")}/>
				</Field>
				<Field label="User name" id="new-user-name">
					<input type="text" autoFocus value={name} onChange={this.onChangeEvt("name")}/>
				</Field>
				<Field label="Type" id="new-user-type">
					<select value={type} onChange={this.onChangeEvt("type")}>
						{types.map((aType) => (
							<option key={aType} value={aType}>{aType}</option>
						))}
					</select>
				</Field>
				<Field label="Description" id="new-user-description">
					<DescriptionField
						value={description}
						maxLength={500}
						onChange={this.onDescriptionChange}/>
				</Field>
				<Controls>
					<a href="/">Back</a>
					<button className="right" type="submit" onClick={this.onSubmit}>Create user</button>
				</Controls>
			</form>
		)
	}

	onSubmit = (e) => {
		e.preventDefault()
		// eslint-disable-next-line no-console
		console.log(this.state)
	}
	onChangeEvt = (name) => (evt) => {
		this.setState({
			[name]: evt.target.value
		})
	}
	onDescriptionChange = (newDescription) => {
		this.setState({
			description: newDescription
		})
	}

	static propTypes = {
		avatar: PropTypes.string,
		name: PropTypes.string,
		type: PropTypes.string,
		description: PropTypes.string,
		types: PropTypes.arrayOf(PropTypes.string)
	}
}
export default NewUser