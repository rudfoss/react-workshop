import { connect } from "react-redux"
import Users from "./Users"

const mapStateToProps = (state) => ({
	users: state.users
})
const mapDispatchToProps = (dispatch) => ({
	onRemove: (userId) => {
		dispatch({
			type: "REMOVE_USER_BY_ID",
			payload: userId
		})
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(Users)