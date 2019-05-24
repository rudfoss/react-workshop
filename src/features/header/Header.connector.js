import { connect } from "react-redux"
import Header from "./Header"

import * as usersDuck from "../users/users.duck"

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch) => ({
	onSave: () => {
		dispatch(usersDuck.storeUsersSagaAction())
		// dispatch(usersDuck.storeUsers)
	},
	onLoad: () => {
		dispatch(usersDuck.fetchUsersSagaAction())
		// dispatch(usersDuck.fetchUsers)
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)