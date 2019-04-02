import React from "react"
import PropTypes from "prop-types"
import { userEntity } from "../../entities/userEntity"
import { LabelledField } from "../fields"

export class UserForm extends React.PureComponent{
	render(){
		const {user = {}, mode} = this.props
		return (
			<form onSubmit={this.onSubmit}>
				<h1>{mode} user</h1>
				<LabelledField label="Name">
					<input type="text" value={user.id}/>
				</LabelledField>
				<button type="button" onClick={this.props.onCancel}>
					Back
				</button>
			</form>
		)
	}

	onSubmit = (evt) => {
		evt.preventDefault()
		this.props.onSave()
	}

	static defaultProps = {
		mode: "New"
	}
	static propTypes = {
		user: userEntity,
		mode: PropTypes.oneOf(["New", "Edit"]),
		onSave: PropTypes.func.isRequired,
		onCancel: PropTypes.func.isRequired
	}
}
export default UserForm