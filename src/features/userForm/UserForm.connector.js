import { connect } from "react-redux"
import UserForm from "./UserForm"
import { uniqueId } from "../../utils/uniqueId"

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
		dispatch({
			type: "SET_USER_FORM_PROP",
			payload: {
				prop, newValue
			}
		})
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(UserForm)