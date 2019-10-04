import React, { useEffect } from "react"
import PropTypes from "prop-types"

import RoomListItem from "./RoomListItem"

import classes from "./RoomList.scss"

export const RoomList = ({ rooms, onRefreshRooms, onDeleteRoom }) => {
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

	onRefreshRooms: PropTypes.func,
	onDeleteRoom: PropTypes.func
}
RoomList.defaultProps = {
	rooms: []
}

export default RoomList