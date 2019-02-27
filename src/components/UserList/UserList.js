import React from "react"
import PropTypes from "prop-types"
import { UserListItem } from "./UserListItem"
import cn from "classnames"

import classes from "./UserList.scss"
import columnClasses from "./UserListColumns.scss"

export class name extends React.PureComponent{
	static propTypes = {
		users: PropTypes.arrayOf(PropTypes.shape(UserListItem.propTypes)),
		onNewClick: PropTypes.func
	}
	static defaultProps = {
		users: []
	}

	render(){
		return (
			<div className={cn(classes.container, "list")}>
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
}
export default name