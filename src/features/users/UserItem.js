import React from "react"
import { userEntity } from "../../entities/user"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faMinusSquare } from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"

export class UserItem extends React.PureComponent{
	render(){
		const {user} = this.props
		return (
			<tr>
				<td>{user.id}</td>
				<td>{user.name}</td>
				<td>{user.type}</td>
				<td>{user.created.toISOString()}</td>
				<td>
					<FontAwesomeIcon icon={faEdit}/>
					<FontAwesomeIcon icon={faMinusSquare}/>
				</td>
			</tr>
		)
	}

	static propTypes = {
		user: userEntity.isRequired,
		onEdit: PropTypes.func,
		onRemove: PropTypes.func
	}
}
export default UserItem