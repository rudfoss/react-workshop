import {connect} from "react-redux"
import Users from "./Users"
import { push } from "connected-react-router"

import * as users from "./users.duck"

const mapStateToProps = (state) => {
	return {
		users: users.getUsers(state),
		isWorking: users.isWorking(state),
		error: users.getWorkError(state)
	}
}
const mapDispatchToProps = (dispatch) => ({
	onEditUser: (id) => {
		dispatch(push(`/${id}/edit`))
	},
	onRemoveUser: (id) => dispatch(users.removeUserById(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Users)