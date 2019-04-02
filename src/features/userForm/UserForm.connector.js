import {connect} from "react-redux"
import UserForm from "./UserForm"

import * as userCombiner from "./userForm.combiner"
import * as userForm from "./userForm.duck"

const mapStateToProps = (state) => {
	return {
		user: userForm.getEditingUser(state)
	}
}
const mapDispatchToProps = (dispatch, ownProps) => ({
	onSave: () => {
		dispatch(userCombiner.setUser())
	},
	onCancel: () => {
		const {history} = ownProps
		history.push("/")
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(UserForm)