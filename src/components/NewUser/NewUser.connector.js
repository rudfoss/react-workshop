import {connect} from "react-redux"
import NewUser from "./NewUser"
import NewUserHook from "./NewUserHook"
import {push} from "connected-react-router"

import * as newUserDuck from "../../ducks/newUser.duck"
import * as userCombiner from "../../ducks/user.combiner"

const mapStateToProps = (state) => {
	return {
		avatar: newUserDuck.getPropValue(state, "avatar"),
		name: newUserDuck.getPropValue(state, "name"),
		type: newUserDuck.getPropValue(state, "type"),
		types: newUserDuck.getTypes(state),
		description: newUserDuck.getPropValue(state, "description")
	}
}
const mapDispatchToProps = (dispatch) => ({
	onReset: () => dispatch(newUserDuck.resetUser()),
	onPropChange: (propName, propValue) => dispatch(newUserDuck.setPropValue(propName, propValue)),
	onCreate: () => {
		dispatch(userCombiner.addNewUser())
		dispatch(push("/"))
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(NewUser)