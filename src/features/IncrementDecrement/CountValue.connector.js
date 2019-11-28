import { connect } from "react-redux"
import CountValue from "./CountValue"

const mapStateToProps = (state) => ({
	count: state.count
})
const mapDispatchToProps = (dispatch) => ({
	setCount: (newCount) => {
		dispatch({
			type: "SET",
			payload: newCount
		})
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(CountValue)