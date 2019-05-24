import { connect } from "react-redux"
import UserForm from "./UserForm"
import { uniqueId } from "../../utils/uniqueId"

import * as userFormDuck from "./userForm.duck"

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
		dispatch({
			type: "SAVE_USER_FORM",
			payload: uniqueId()
		})
	},
	onChange: (prop, newValue) => {
		const action = userFormDuck.setUserFormProp(prop, newValue)
		dispatch(action)
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(UserForm)