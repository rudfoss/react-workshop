import { connect } from "react-redux"
import NewUserForm from "./NewUserForm"

const mapStateToProps = (state) => ({
	name: state.name,
	description: state.description,
	role: state.role || state.roles[1],
	roles: state.roles
})
const mapDispatchToProps = (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm)