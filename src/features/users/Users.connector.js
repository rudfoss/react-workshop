import {connect} from "react-redux"
import Users from "./Users"

import * as users from "./users.duck"

const mapStateToProps = (state) => {
	return {
		users: users.getUsers(state)
	}
}
const mapDispatchToProps = (dispatch) => ({
	onRemoveUser: (id) => dispatch(users.removeUserById(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Users)