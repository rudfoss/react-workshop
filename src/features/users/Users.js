import React from "react"
import PropTypes from "prop-types"
import UserRow from "./UserRow"
import { userEntity } from "../../entities/userEntity"

import classes from "./Users.scss"

export class Users extends React.PureComponent{
	render(){
		const {users, isWorking} = this.props

		if (isWorking) {
			return <div>Loading...</div>
		}

		return (
			<table className={classes.userTable}>
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

	static defaultProps = {
		users: []
	}
	static propTypes = {
		onEditUser: PropTypes.func,
		onRemoveUser: PropTypes.func,
		users: PropTypes.arrayOf(userEntity)
	}
}
export default Users