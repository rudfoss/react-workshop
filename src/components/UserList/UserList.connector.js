import {connect} from "react-redux"
import {push} from "connected-react-router"

import UserList from "./UserList"
import * as usersDuck from "../../ducks/users.duck"

const mapStateToProps = (state) => {
	return {
		users: usersDuck.getUsers(state)
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onNewClick: () => dispatch(push("/new"))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList)