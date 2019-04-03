import React from "react"
import PropTypes from "prop-types"
import { userProps } from "../../entities/user"
import UserItem from "./UserItem"

export class Users extends React.PureComponent{
	render(){
		const {users} = this.props

		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Type</th>
						<th>Created</th>
						<th>Last modified</th>
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
		users: PropTypes.arrayOf(userProps),
		onEditUser: PropTypes.func,
		onRemoveUser: PropTypes.func
	}
}
export default Users