import React from "react"
import PropTypes from "prop-types"

export class UserRow extends React.PureComponent{
	render(){
		const {user, onEdit, onRemove} = this.props
		return (
			<tr>
				<td>{user.name}</td>
				<td>{user.type}</td>
				<td>{user.disabled ? "Yes" : ""}</td>
				<td>
					<button onClick={onEdit}>Edit</button>
					<button onClick={onRemove}>Remove</button>
				</td>
			</tr>
		)
	}

	static propTypes = {
		onEdit: PropTypes.func,
		onRemove: PropTypes.func
	}
}
export default UserRow