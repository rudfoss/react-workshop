import { connect } from "react-redux"
import HeaderFooterFrame from "./HeaderFooterFrame"

import * as users from "../users/users.duck"

const mapStateToProps = (state) => {
	return {
		userCount: users.getUsers(state).length
	}
}
const mapDispatchToProps = (dispatch) => ({
	onSave: () => {
		dispatch(users.storeUsersSagaAction())
	},
	onLoad: () => {
		dispatch(users.fetchUsersSagaAction())
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(HeaderFooterFrame)