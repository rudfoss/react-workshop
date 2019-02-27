import React from "react"
import PropTypes from "prop-types"

import columnClasses from "./UserListColumns.scss"

export class UserListItem extends React.PureComponent{
	render(){
		const {avatar, id, name, type, created} = this.props

		return (
			<tr>
				<td><img src={avatar} width="30px"/></td>
				<td className={columnClasses.name}><a href={"/view/"+id}>{name}</a></td>
				<td className={columnClasses.type}>{type}</td>
				<td className={columnClasses.created}>{new Date(Date.parse(created)).toISOString()}</td>
			</tr>
		)
	}

	static propTypes = {
		avatar: PropTypes.string,
		id: PropTypes.string.isRequired,
		name: PropTypes.string,
		type: PropTypes.string,
		created: PropTypes.string
	}
}
export default UserListItem