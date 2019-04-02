import React from "react"
import PropTypes from "prop-types"
import { userEntity } from "../../entities/user"
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
					{users.map(user => <UserItem key={user.id} user={user}/>)}
				</tbody>
			</table>
		)
	}

	static defaultProps = {
		users: []
	}
	static propTypes = {
		users: PropTypes.arrayOf(userEntity)
	}
}
export default Users