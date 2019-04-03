import React from "react"
import PropTypes from "prop-types"
import { userProps } from "../../entities/user"
import UserItem from "./UserItem"
import classes from "./Users.scss"

export class Users extends React.PureComponent{
	render(){
		const {users, isWorking = false} = this.props

		if (isWorking) {
			return (
				<div>working...</div>
			)
		}

		return (
			<table className={classes.usersTable}>
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
		isWorking: PropTypes.bool,
		onEditUser: PropTypes.func,
		onRemoveUser: PropTypes.func
	}
}
export default Users