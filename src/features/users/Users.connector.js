import {connect} from "react-redux"
import Users from "./Users"

import * as usersDuck from "./users.duck"

const mapStateToProps = (state) => ({
	users: usersDuck.getUsers(state)
})
const mapDispatchToProps = (dispatch) => ({
	onRemoveUser: (userId) => {
		dispatch(usersDuck.removeUserById(userId))
	}
})
export default connect(
	mapStateToProps, mapDispatchToProps
)(Users)