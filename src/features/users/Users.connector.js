import { connect } from "react-redux"
import Users from "./Users"

import * as users from "./users.duck"

const mapStateToProps = (state) => {
	return {
		users: users.getUsers(state),
		isWorking: users.isWorking(state),
		error: users.getWorkError(state)
	}
}
const mapDispatchToProps = (dispatch, ownProps) => ({
	onEditUser: (id) => {
		const { history } = ownProps
		history.push(`/${id}/edit`)
	},
	onRemoveUser: (id) => dispatch(users.removeUserById(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Users)