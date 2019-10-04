import { connect } from "react-redux"
import CreateUser from "./CreateUser"

import * as createUserDuck from "./createUser.duck"
import * as usersDuck from "ducks/users.duck"

export default connect((state) => ({
	name: createUserDuck.getName(state),
	email: createUserDuck.getEmail(state),
	password: createUserDuck.getPassword(state),
	repeatPassword: createUserDuck.getRepeatPassword(state),
	nickname: createUserDuck.getNickname(state),
	age: createUserDuck.getAge(state),
	level: createUserDuck.getLevel(state),

	canCreate: createUserDuck.isValid(state),
	createFailed: usersDuck.isCreateFailed(state),
	createSuccess: usersDuck.isCreateSuccess(state),
	failureMessage: usersDuck.getCreateFailedMessage(state)
}), (dispatch) => ({
	onPropChange: (name, value) => dispatch(createUserDuck.setProp(name, value)),
	onCreate: () => dispatch(createUserDuck.createUser())
}))(CreateUser)