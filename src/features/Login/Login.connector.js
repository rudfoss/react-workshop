import { connect } from "react-redux"
import Login from "./Login"

import * as users from "../../ducks/users.duck"

export default connect((state) => ({
	loginFailed: users.isLoginFailed(state),
	failureMessage: users.getLoginFailedMessage(state),
}), (dispatch, ownProps) => ({
	onLogin: (userPass) => dispatch(users.loginUser(userPass)),
	onCreateUser: () => {
		dispatch(users.resetCreateSuccess())
		ownProps.history.push("/create-user")
	}
}))(Login)