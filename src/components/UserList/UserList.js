import React from "react"
import PropTypes from "prop-types"

import classes from "./UserList.scss"
import columnClasses from "./UserListColumns.scss"

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
		users: PropTypes.arrayOf(PropTypes.shape({
			avatar: PropTypes.string,
			id: PropTypes.string,
			name: PropTypes.string,
			type: PropTypes.string,
			created: PropTypes.string
		})).isRequired,
		onNewClick: PropTypes.func.isRequired
	}
}
export default UserList