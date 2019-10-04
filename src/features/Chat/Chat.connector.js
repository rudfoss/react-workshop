import { connect } from "react-redux"
import Chat from "./Chat"

import * as users from "../../ducks/users.duck"

export default connect((state) => ({
	isAuthenticated: users.isAuthenticated(state)
}))(Chat)