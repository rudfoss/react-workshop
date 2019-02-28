import {connect} from "react-redux"

import UserList from "./UserList"
import * as usersDuck from "../../ducks/users.duck"

const mapStateToProps = (state) => {
	return {
		users: usersDuck.getUsers(state)
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onNewClick: () => null
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList)