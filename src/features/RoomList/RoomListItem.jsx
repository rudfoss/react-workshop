import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import classes from "./RoomListItem.scss"

export const RoomListItem = ({ room }) => (
	<li className={classes.room}>
		<Link to={`/chat/${room.name}`}>
			<span className={classes.roomName}>
				<span className={classes.roomName}>{room.hidden && ("👻")}{room.name}</span>
				{room.description && (<span className={classes.roomDesc}>{room.description}</span>)}
			</span>
		</Link>
	</li>
)
RoomListItem.propTypes = {
	room: PropTypes.shape({
		name: PropTypes.string.isRequired,
		description: PropTypes.string,
		hidden: PropTypes.bool
	}).isRequired
}

export default RoomListItem