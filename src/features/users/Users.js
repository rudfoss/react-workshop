import React from "react"
import PropTypes from "prop-types"
import { userEntity } from "../../entities/userEntity"
import UserItem from "./UserItem"

export class Users extends React.PureComponent{
	render(){
		const {users} = this.props

		return (
			<table>
				<thead>
					<tr>
						<th>Avatar</th>
						<th>Name</th>
						<th>Type</th>
						<th>Created</th>
						<th>Controls</th>
					</tr>
				</thead>
				<tbody>
					{users.map(user => (
						<UserItem
							key={user.id}
							user={user}
							onEdit={this.onEdit(user.id)}
							onRemove={this.onRemove(user.id)}/>
					))}
				</tbody>
			</table>
		)
	}

	onEdit = (id) => {
		if (!this.props.onEditUser) return
		return () => this.props.onEditUser(id)
	}
	onRemove = (id) => {
		if (!this.props.onRemoveUser) return
		return () => this.props.onRemoveUser(id)
	}

	static defaultProps = {
		users: []
	}
	static propTypes = {
		users: PropTypes.arrayOf(userEntity),
		onEditUser: PropTypes.func,
		onRemoveUser: PropTypes.func
	}
}
export default Users