import React from "react"
import PropTypes from "prop-types"
import { userProps } from "../../entities/user"
import UserItem from "./UserItem"
import classes from "./Users.scss"

export class Users extends React.PureComponent{
	render(){
		const {users, isWorking = false, error} = this.props

		if (isWorking) {
			return (
				<div>working...</div>
			)
		}
		if (error) {
			return <div>{error}</div>
		}

		return (
			<table className={classes.usersTable}>
				<thead>
					<tr>
						<th className={classes.name}>Name</th>
						<th className={classes.type}>Type</th>
						<th className={classes.created}>Created</th>
						<th className={classes.lastModified}>Last modified</th>
						<th className={classes.controls}></th>
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
		onRemoveUser: PropTypes.func,
		error: PropTypes.string
	}
}
export default Users