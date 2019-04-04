import {connect} from "react-redux"
import Users from "./Users"

const mapStateToProps = (state) => ({
	users: state.users
})
const mapDispatchToProps = (dispatch) => ({
	onRemoveUser: (userId) => {
		dispatch({
			type: "REMOVE_USER_BY_ID",
			payload: userId
		})
	}
})
export default connect(
	mapStateToProps, mapDispatchToProps
)(Users)