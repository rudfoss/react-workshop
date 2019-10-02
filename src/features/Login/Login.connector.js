import { connect } from "react-redux"
import Login from "./Login"

import * as users from "ducks/users.duck"
import * as newUser from "features/CreateUser/createUser.duck"

export default connect((state) => ({
	isAuthenticated: users.isAuthenticated(state),
	loginFailed: users.isLoginFailed(state),
	failureMessage: users.getLoginFailedMessage(state),
}), (dispatch, ownProps) => ({
	onLogin: (userPass) => dispatch(users.loginUser(userPass)),
	onCreateUser: () => {
		dispatch(newUser.clearUser())
		dispatch(users.resetCreateSuccess())
		ownProps.history.push("/create-user")
	}
}))(Login)