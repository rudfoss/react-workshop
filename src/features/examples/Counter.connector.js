import { connect } from "react-redux"
import Counter from "./Counter"

const mapStateToProps = (state) => {
	return {
		count: state.count
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onIncrement: () => {
			dispatch({ type: "INCREMENT_COUNT" })
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)