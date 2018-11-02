import {connect} from "react-redux"
import ViewUser from "./ViewUser"
import {push} from "connected-react-router"

import * as usersDuck from "../../ducks/users.duck"

const mapStateToProps = (state, ownProps) => {
	const user = usersDuck.getUser(state, ownProps.match.params.id)
	return user
}
const mapDispatchToProps = (dispatch) => ({
	onDelete: (id) => {
		dispatch(usersDuck.removeUser(id))
		dispatch(push("/"))
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(ViewUser)