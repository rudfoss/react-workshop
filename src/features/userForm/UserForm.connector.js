import {connect} from "react-redux"
import UserForm from "./UserForm"

import * as userCombiner from "./userForm.combiner"
import * as userForm from "./userForm.duck"

const mapStateToProps = (state) => {
	return {
		user: userForm.getEditingUser(state),
		types: userForm.getTypes(state)
	}
}
const mapDispatchToProps = (dispatch, ownProps) => ({
	onFieldChange: (fieldName, newValue) => {
		dispatch(userForm.setEditingUserField(fieldName, newValue))
	},
	onSave: () => {
		const {history} = ownProps
		dispatch(userCombiner.setUser())
		history.push("/")
	},
	onCancel: () => {
		const {history} = ownProps
		dispatch(userForm.clearEditingUser())
		history.push("/")
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(UserForm)