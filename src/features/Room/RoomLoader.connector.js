import { connect } from "react-redux"
import RoomLoader from "./RoomLoader"

import * as room from "./room.duck"

export default connect((state) => ({
	hasRoom: room.hasRoom(state)
}), (dispatch) => ({
	onLoadRoom: (roomName) => dispatch(room.fetchRoomByName(roomName)),
	onUnloadRoom: () => dispatch(room.setRoom())
}))(RoomLoader)