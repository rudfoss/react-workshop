import { connect } from "react-redux"
import CreateUser from "./CreateUser"

import { changeProp } from "../../store/actions"

export default connect((state) => {
	return {
		...state
	}
}, (dispatch) => {
	return {
		onPropChange: (prop, newValue) => {
			dispatch(changeProp(prop, newValue))
		}
	}
})(CreateUser)