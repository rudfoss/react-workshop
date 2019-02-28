import React from "react"
import PropTypes from "prop-types"
import UserListItem from "./UserListItem"

import classes from "./UserList.scss"
import columnClasses from "./UserListColumns.scss"
import Routes from "../../routes"

export class UserList extends React.PureComponent{
	render(){
		return (
			<div className={classes.container}>
				<h1>The awesome user database</h1>
				<table>
					<thead>
						<tr>
							<th></th>
							<th className={columnClasses.name}>Name</th>
							<th className={columnClasses.type}>Type</th>
							<th className={columnClasses.created}>Created</th>
						</tr>
					</thead>
					<tbody>
						{this.props.users.map((user) => (
							<UserListItem key={user.id} {...user}/>
						))}
					</tbody>
				</table>
				<div className={classes.newBtnContainer}>
					<button type="button" onClick={this.props.onNewClick}>
						<i className="fas fa-plus"/>
					</button>
				</div>
			</div>
		)
	}

	static propTypes = {
		users: PropTypes.arrayOf(
			PropTypes.shape(
				UserListItem.propTypes
			)).isRequired,
		onNewClick: PropTypes.func.isRequired
	}
}
export default UserList