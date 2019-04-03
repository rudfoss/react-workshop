import {connect} from "react-redux"
import HeaderFooterFrame from "./HeaderFooterFrame"

import * as users from "../users/users.duck"

const mapStateToProps = (state) => {
	return {
		userCount: users.getUsers(state).length
	}
}
const mapDispatchToProps = (dispatch) => ({
	onSave: () => {
		dispatch(users.storeUsers())
	},
	onLoad: () => {
		dispatch(users.fetchUsers())
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(HeaderFooterFrame)