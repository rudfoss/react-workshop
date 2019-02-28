import {connect} from "react-redux"

import * as newUserDuck from "../../ducks/newUser.duck"
import NewUser from "./NewUser"

const mapStateToProp = (state) => {
	return {
		avatar: newUserDuck.getPropValue(state, "avatar"),
		name: newUserDuck.getPropValue(state, "name"),
		type: newUserDuck.getPropValue(state, "type"),
		description: newUserDuck.getPropValue(state, "description"),
		types: newUserDuck.getTypes(state)
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onPropChange: (propName, propValue) =>
			dispatch(newUserDuck.setPropValue(propName, propValue)),

		onNewUser: () => null // TODO: Impl onNewUser
	}
}
export default connect(mapStateToProp, mapDispatchToProps)(NewUser)