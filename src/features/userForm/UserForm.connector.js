import { connect } from "react-redux"
import UserForm from "./UserForm"

import * as userFormDuck from "./userForm.duck"
import * as userToUserFormCombiner from "../../ducks/userToUserForm.combiner"

const mapStateToProps = (state) => {
	return {
		name: userFormDuck.getProp(state, "name"),
		email: userFormDuck.getProp(state, "email"),
		type: userFormDuck.getProp(state, "type"),
		password: userFormDuck.getProp(state, "password"),
		disabled: userFormDuck.getProp(state, "disabled"),
		comments: userFormDuck.getProp(state, "comments"),
	}
}
const mapDispatchToProps = (dispatch) => ({
	onSave: () => {
		dispatch(userToUserFormCombiner.setUser)
	},
	onChange: (prop, newValue) => {
		const action = userFormDuck.setUserFormProp(prop, newValue)
		dispatch(action)
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(UserForm)