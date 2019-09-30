import { connect } from "react-redux"
import Login from "./Login"

import * as users from "../../ducks/users.duck"

export default connect((state) => ({
	loginFailed: users.isLoginFailed(state),
	failureMessage: users.getLoginFailedMessage(state),
}), (dispatch) => ({
	onLogin: (userPass) => dispatch(users.loginUser(userPass))
}))(Login)