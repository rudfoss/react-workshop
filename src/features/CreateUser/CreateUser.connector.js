import { connect } from "react-redux"
import CreateUser from "./CreateUser"

import * as createUserDuck from "./createUser.duck"
import * as usersDuck from "../../ducks/users.duck"

export default connect((state) => ({
	name: createUserDuck.getStringProp(state, "name"),
	email: createUserDuck.getStringProp(state, "email"),
	password: createUserDuck.getStringProp(state, "password"),
	repeatPassword: createUserDuck.getStringProp(state, "repeatPassword"),
	nickname: createUserDuck.getStringProp(state, "nickname"),
	age: createUserDuck.getNumProp(state, "age"),
	level: createUserDuck.getObjectProp(state, "level"),

	canCreate: createUserDuck.isValid(state),
	createFailed: usersDuck.isCreateFailed(state),
	createSuccess: usersDuck.isCreateSuccess(state),
	failureMessage: usersDuck.getCreateFailedMessage(state)
}), (dispatch) => ({
	onPropChange: (name, value) => dispatch(createUserDuck.setProp(name, value)),
	onCreate: () => dispatch(createUserDuck.createUser())
}))(CreateUser)