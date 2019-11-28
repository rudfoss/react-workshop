import { connect } from "react-redux"

import Increment from "./Increment"

const mapStateToProps = (state) => {
	return {
		count: state.count
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => {
			dispatch({ type: "INCREMENT" })
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Increment)