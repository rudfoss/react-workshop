import {connect} from "react-redux"
import UserForm from "./UserForm"

import * as userForm from "./userForm.duck"

const mapStateToProps = (state) => ({
	user: userForm.getEditingUser(state),
	types: (state.userForm || {}).types || ["Read-only", "User", "Manager", "Administrator", "Sysadmin"]
})
const mapDispatchToProps = (dispatch) => ({
	setNewUser: () => {
		dispatch(userForm.newUser())
	},
	onPropChange: (propName, propValue) => {
		dispatch(userForm.setEditingUserField(propName, propValue))
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(UserForm)