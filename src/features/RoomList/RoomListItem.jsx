import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import Button from "ui/Button/Button"

import classes from "./RoomListItem.scss"

const confirmAction = (message, onConfirm) => (...args) => {
	if (confirm(message)) {
		onConfirm(...args)
	}
}

export const RoomListItem = ({ room, onDeleteRoom }) => (
	<li className={classes.room}>
		{onDeleteRoom && (
			<Button
				mode="secondary"
				onClick={confirmAction(`Really delete "${room.name}"?`, onDeleteRoom)}>
				Delete
			</Button>
		)}
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
	}).isRequired,

	onDeleteRoom: PropTypes.func
}

export default RoomListItem