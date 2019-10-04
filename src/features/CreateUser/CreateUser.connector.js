import { connect } from "react-redux"
import CreateUser from "./CreateUser"

import * as createUserDucks from "../../store/createUser.duck"

export default connect((state) => {
	return {
		...createUserDucks.getCreateUserState(state)
	}
}, (dispatch) => {
	return {
		onPropChange: (prop, newValue) => {
			dispatch(createUserDucks.changeProp(prop, newValue))
		}
	}
})(CreateUser)