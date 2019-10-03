import { connect } from "react-redux"
import Header from "./Header"
import { withRouter } from "react-router-dom"

import * as users from "ducks/users.duck"
import * as rooms from "features/Room/room.duck"

export default withRouter(connect((state) => ({
	username: users.getUserName(state),
	roomName: rooms.hasRoom(state) ? rooms.getName(state) : undefined,
	roomParticipants: rooms.hasRoom(state) ? rooms.getParticipantCount(state) : undefined
}), (dispatch, ownProps) => ({
	onLogout: () => {
		ownProps.history.push("/")
		setTimeout(() => {
			dispatch(users.setLoggedInUser())
		})
	}
}))(Header))