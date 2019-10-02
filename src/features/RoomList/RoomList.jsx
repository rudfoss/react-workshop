import React, { useEffect } from "react"
import PropTypes from "prop-types"

import Button from "ui/Button/Button"
import RoomListItem from "./RoomListItem"

import classes from "./RoomList.scss"

export const RoomList = ({ rooms, onRefreshRooms, onCreateRoom, onDeleteRoom }) => {
	useEffect(() => {
		onRefreshRooms()
	}, [])
	return (
		<div className={classes.container}>
			<ul className={classes.roomList}>
				{rooms.map((room) => (
					<RoomListItem key={room.name} room={room} onDeleteRoom={onDeleteRoom}/>
				))}
				{rooms.length === 0 && (
					<li>No rooms</li>
				)}
			</ul>
			{onCreateRoom && (
				<div>
					<Button type="button" onClick={onCreateRoom}>Create room</Button>
				</div>
			)}
		</div>
	)
}
RoomList.propTypes = {
	rooms: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		description: PropTypes.string,
		participants: PropTypes.arrayOf(PropTypes.any),
		hidden: PropTypes.bool
	})),

	onCreateRoom: PropTypes.func,
	onRefreshRooms: PropTypes.func,
	onDeleteRoom: PropTypes.func
}
RoomList.defaultProps = {
	rooms: []
}

export default RoomList