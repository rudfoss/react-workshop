import { connect } from "react-redux"
import Header from "./Header"
import { withRouter } from "react-router-dom"

import * as users from "ducks/users.duck"
import * as room from "features/Room"

export default withRouter(connect((state) => ({
	username: users.getUserName(state),
	roomName: room.hasRoom(state) ? room.getName(state) : undefined,
	roomHidden: room.hasRoom(state) ? room.isHidden(state) : false
}), (dispatch, ownProps) => ({
	onLogout: () => {
		ownProps.history.push("/")
		setTimeout(() => {
			dispatch(users.setLoggedInUser())
		})
	}
}))(Header))