import { connect } from "react-redux"
import CreateUser from "./CreateUser"

import * as createUserDucks from "../../store/createUser.duck"

export default connect((state) => ({
	name: createUserDucks.getName(state),
	email: createUserDucks.getEmail(state),
	password: createUserDucks.getPassword(state),
	retypePassword: createUserDucks.getRetypePassword(state),
	nickname: createUserDucks.getNickname(state),
	age: createUserDucks.getAge(state),
	level: createUserDucks.getLevel(state),

	isValid: createUserDucks.isValid(state)
}), (dispatch) => {
	return {
		onPropChange: (prop, newValue) => {
			dispatch(createUserDucks.setProp(prop, newValue))
		}
	}
})(CreateUser)