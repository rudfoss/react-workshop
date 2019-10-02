import { connect } from "react-redux"
import RoomList from "./RoomList"

import * as rooms from "../../ducks/rooms.duck"

export default connect((state) => ({
	rooms: rooms.getRooms(state)
}), (dispatch) => ({
	onRefreshRooms: () => dispatch(rooms.fetchRooms())
}))(RoomList)