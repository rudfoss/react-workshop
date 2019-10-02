import { connect } from "react-redux"
import Header from "./Header"
import { withRouter } from "react-router-dom"

import * as users from "ducks/users.duck"

export default withRouter(connect((state) => ({
	username: users.getUserName(state)
}), (dispatch, ownProps) => ({
	onLogout: () => {
		ownProps.history.push("/")
		setTimeout(() => {
			dispatch(users.setLoggedInUser())
		})
	}
}))(Header))