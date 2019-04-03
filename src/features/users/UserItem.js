import React from "react"
import { userProps } from "../../entities/user"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faMinusSquare } from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"

export class UserItem extends React.PureComponent{
	render(){
		const {user, onEdit, onRemove} = this.props
		return (
			<tr>
				<td>{user.id}</td>
				<td>{user.name}</td>
				<td>{user.type}</td>
				<td>{user.created.toISOString()}</td>
				<td>
					{onEdit && (
						<button type="button" onClick={onEdit}>
							<FontAwesomeIcon icon={faEdit}/>
						</button>
					)}
					{onRemove && (
						<button type="button" onClick={this.onRemove}>
							<FontAwesomeIcon icon={faMinusSquare}/>
						</button>
					)}
				</td>
			</tr>
		)
	}

	onRemove = () => {
		if (confirm(`Really remove "${this.props.user.name}"`)) {
			this.props.onRemove()
		}
	}

	static propTypes = {
		user: userProps.isRequired,
		onEdit: PropTypes.func,
		onRemove: PropTypes.func
	}
}
export default UserItem