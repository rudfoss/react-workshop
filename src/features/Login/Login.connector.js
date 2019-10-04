import { connect } from "react-redux"
import Login from "./Login"

import * as loginDuck from "./login.duck"

export default connect((state) => ({
	username: loginDuck.getUsername(state),
	password: loginDuck.getPassword(state)
}), (dispatch) => ({
	onSetUsername: (newUsername) => dispatch(loginDuck.setUsername(newUsername)),
	onSetPassword: (newPassword) => dispatch(loginDuck.setPassword(newPassword)),
	onLogin: () => dispatch(loginDuck.loginUser())
}))(Login)