import { connect } from "react-redux"
import Users from "./Users"

import * as usersDuck from "./users.duck"

const mapStateToProps = (state) => ({
	users: usersDuck.getUsers(state),
	isWorking: usersDuck.isWorking(state)
})
const mapDispatchToProps = (dispatch) => ({
	onRemove: (userId) => {
		if (confirm("Really remove?")) {
			dispatch({
				type: "REMOVE_USER_BY_ID",
				payload: userId
			})
		}
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(Users)