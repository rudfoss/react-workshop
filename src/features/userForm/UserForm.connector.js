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
	},
	onPropChange: (propName, propValue) => {
		dispatch({
			type: "SET_EDITING_USER_PROP",
			payload: {
				propName, propValue
			}
		})
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(UserForm)