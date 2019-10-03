import { connect } from "react-redux"
import CreateUser from "./CreateUser"

export default connect((state) => {
	return {
		...state
	}
}, (dispatch) => {
	return {
		onPropChange: (prop, newValue) => {
			dispatch({
				type: "changeProp",
				payload: {
					prop, newValue
				}
			})
		}
	}
})(CreateUser)