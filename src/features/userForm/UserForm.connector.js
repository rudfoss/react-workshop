import {connect} from "react-redux"
import UserForm from "./UserForm"

import * as userCombiner from "../../combiners/userForm.combiner"
import * as userForm from "./userForm.duck"

const mapStateToProps = (state, ownProps) => {
	return {
		user: userForm.getEditingUser(state),
		types: userForm.getTypes(state),
		mode: ownProps.match.params.mode || "new"
	}
}
const mapDispatchToProps = (dispatch, ownProps) => ({
	onFieldChange: (fieldName, newValue) => {
		dispatch(userForm.setEditingUserField(fieldName, newValue))
	},

	setUser: () => {
		const id = ownProps.match.params.id
		dispatch(userCombiner.setEditUserById(id))
	},
	setNewUser: () => {
		dispatch(userForm.setNewUser())
	},

	onSave: () => {
		const {history} = ownProps
		dispatch(userForm.setModified())
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