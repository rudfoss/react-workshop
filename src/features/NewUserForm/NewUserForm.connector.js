import { connect } from "react-redux"
import NewUserForm from "./NewUserForm"

import * as newUserFormDuck from "./newUserForm.duck"

const mapStateToProps = (state) => ({
	name: newUserFormDuck.getName(state),
	description: newUserFormDuck.getDescription(state),
	role: newUserFormDuck.getRole(state),
	roles: newUserFormDuck.getRoles(state)
})
const mapDispatchToProps = (dispatch) => ({
	onNameChange: (newName) => {
		dispatch(newUserFormDuck.setName(newName))
	},
	onDescriptionChange: (newDescription) => {
		dispatch(newUserFormDuck.setDescription(newDescription))
	},
	onRoleChange: (newRole) => {
		dispatch(newUserFormDuck.setRole(newRole))
	},
	onSubmit: (values) => {
		console.log(values)
	},
	onReset: () => {
		dispatch(newUserFormDuck.resetNewUserForm())
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm)