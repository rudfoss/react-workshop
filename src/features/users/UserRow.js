import React from "react"
import PropTypes from "prop-types"
import { userEntity } from "../../entities/userEntity"
import Counter from "../counter"

export class UserRow extends React.PureComponent{
	render(){
		const {user, onEdit, onRemove} = this.props
		return (
			<tr>
				<td>{user.name}</td>
				<td>{user.type}</td>
				<td>{user.disabled ? "Yes" : ""}</td>
				<td>
					<Counter buttonText="Increment"/>
					<button onClick={onEdit}>Edit</button>
					<button onClick={onRemove}>Remove</button>
				</td>
			</tr>
		)
	}

	static propTypes = {
		onEdit: PropTypes.func,
		onRemove: PropTypes.func,
		user: userEntity
	}
}
export default UserRow