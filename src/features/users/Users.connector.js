import {connect} from "react-redux"
import Users from "./Users"

import * as users from "./users.duck"
import * as userCombiner from "../userForm/userForm.combiner"

const mapStateToProps = (state) => {
	return {
		users: users.getUsers(state)
	}
}
const mapDispatchToProps = (dispatch, ownProps) => ({
	onEditUser: (id) => {
		const {history} = ownProps
		dispatch(userCombiner.setEditUserById(id))
		history.push(`/${id}/edit`)
	},
	onRemoveUser: (id) => dispatch(users.removeUserById(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(Users)