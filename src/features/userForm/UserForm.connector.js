import {connect} from "react-redux"
import UserForm from "./UserForm"
import { newUser } from "../../entities/userEntity"

const mapStateToProps = (state) => ({
	user: (state.userForm || {}).editingUser,
	types: (state.userForm || {}).types || ["Read-only", "User", "Manager", "Administrator", "Sysadmin"]
})
const mapDispatchToProps = (dispatch) => ({
	setNewUser: () => {
		dispatch({
			type: "CREATE_NEW_USER",
			payload: newUser()
		})
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(UserForm)