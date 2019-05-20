import {connect} from "react-redux"
import User from "./User"

import * as user from "../../ducks/user.duck"

const mapStateToProps = (state) => ({
	authenticated: user.isAuthenticated(state)
})
const mapDispatchToProps = (dispatch) => ({
	onAuthenticate: () => {
		dispatch(user.flipAuthenticated())
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(User)