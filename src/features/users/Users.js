import React from "react"
import PropTypes from "prop-types"
import UserRow from "./UserRow"

export class Users extends React.PureComponent{
	render(){
		const {users} = this.props
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Type</th>
						<th>Disabled</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<UserRow
							key={user.id}
							user={user}
							onEdit={this.onEdit(user.id)}
							onRemove={this.onRemove(user.id)}/>
					))}
				</tbody>
			</table>
		)
	}

	onEdit = (userId) => () => {
		this.props.onEditUser(userId)
	}
	onRemove = (userId) => () => {
		this.props.onRemoveUser(userId)
	}

	static propTypes = {
		onEditUser: PropTypes.func,
		onRemoveUser: PropTypes.func
	}
}
export default Users