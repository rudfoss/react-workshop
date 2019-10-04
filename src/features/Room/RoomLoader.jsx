import React, { useEffect } from "react"
import PropTypes from "prop-types"

import Room from "./Room.connector"

export const RoomLoader = ({ match, hasRoom, onLoadRoom, onUnloadRoom }) => {
	const roomName = match.params.name
	useEffect(() => {
		onLoadRoom(roomName)
		return () => {
			onUnloadRoom(roomName)
		}
	}, [roomName])
	return (
		hasRoom ? <Room/> : <div></div>
	)
}
RoomLoader.propTypes = {
	hasRoom: PropTypes.bool,
	match: PropTypes.shape({
		params: PropTypes.shape({
			name: PropTypes.string.isRequired
		}).isRequired
	}).isRequired,

	onLoadRoom: PropTypes.func.isRequired,
	onUnloadRoom: PropTypes.func.isRequired
}

export default RoomLoader