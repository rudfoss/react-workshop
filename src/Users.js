import React from "react"
import PropTypes from "prop-types"

export class Users extends React.PureComponent{
	render(){
		const { users } = this.props

		if (users.length === 0) {
			return (
				<p>You have no users in your database</p>
			)
		}

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
					{users.map(user => (
						<tr key={user.name}>
							<td>name</td>
							<td>type</td>
							<td>disabled</td>
							<td>...</td>
						</tr>
					))}
				</tbody>
			</table>
		)
	}

	static defaultProps = {
		users: []
	}
	static propTypes = {
		users: PropTypes.arrayOf(PropTypes.shape({
			name: PropTypes.string,
			email: PropTypes.string,
			type: PropTypes.string,
			disabled: PropTypes.bool
		}))
	}
}
export default Users