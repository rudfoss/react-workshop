import { connect } from "react-redux"
import UserForm from "./UserForm"
import { uniqueId } from "../../utils/uniqueId"

import * as userFormDuck from "./userForm.duck"

const mapStateToProps = (state) => {
	const { name, email, type, password, disabled, comments } = state.userForm
	return {
		name, email, type, password, disabled, comments
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