import { connect } from "react-redux"
import Login from "./Login"

import * as users from "ducks/users.duck"
import * as newUser from "features/CreateUser/createUser.duck"
import * as loginDuck from "./login.duck"

export default connect((state) => ({
	username: loginDuck.getUsername(state),
	password: loginDuck.getPassword(state),

	isAuthenticated: users.isAuthenticated(state),
	loginFailed: users.isLoginFailed(state),
	failureMessage: users.getLoginFailedMessage(state),
}), (dispatch, ownProps) => ({
	onLogin: (userPass) => dispatch(loginDuck.loginUser(userPass)),
	onCreateUser: () => {
		dispatch(newUser.clearUser())
		dispatch(users.resetCreateSuccess())
		ownProps.history.push("/create-user")
	},
	onSetUsername: (newUsername) => dispatch(loginDuck.setUsername(newUsername)),
	onSetPassword: (newPassword) => dispatch(loginDuck.setPassword(newPassword))
}))(Login)