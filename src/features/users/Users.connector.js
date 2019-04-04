import {connect} from "react-redux"
import Users from "./Users"

const mapStateToProps = (state) => ({
	users: state.users
})
export default connect(mapStateToProps)(Users)