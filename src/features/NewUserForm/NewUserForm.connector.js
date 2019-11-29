import { connect } from "react-redux"
import NewUserForm from "./NewUserForm"

const mapStateToProps = (state) => ({
	name: state.name,
	description: state.description,
	role: state.role || state.roles[1],
	roles: state.roles
})
const mapDispatchToProps = (dispatch) => ({
	onNameChange: (newName) => {
		dispatch({
			type: "SET_NAME",
			payload: newName
		})
	},
	onDescriptionChange: (newDescription) => {
		dispatch({
			type: "SET_DESCRIPTION",
			payload: newDescription
		})
	},
	onRoleChange: (newRole) => {
		dispatch({
			type: "SET_ROLE",
			payload: newRole
		})
	},
	onSubmit: (values) => {
		console.log(values)
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm)