import { connect } from "react-redux"
import Header from "./Header"

import * as usersDuck from "../users/users.duck"

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
	onSave: () => {
		dispatch(usersDuck.storeUsers)
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)