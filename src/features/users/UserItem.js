import React from "react"
import { userProps } from "../../entities/user"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit, faMinusSquare } from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"
import classes from "./Users.scss"

export class UserItem extends React.PureComponent{
	render(){
		const { user, onEdit, onRemove } = this.props
		return (
			<tr>
				<td className={classes.name}>{user.name}</td>
				<td className={classes.type}>{user.type}</td>
				<td className={classes.disabled}>{user.disabled ? "Yes" : ""}</td>
				<td className={classes.controls}>
					<div>
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
					</div>
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