import { connect } from "react-redux"
import Counter from "./Counter"

// This is equivalent to the function below
// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state) => {
	return {
		count: state.counter
	}
}
const mapStateToPropsShort = (state) => ({
	count: state.counter
})
const mapDispatchToProps = (dispatch) => ({
	onIncrement: () => {
		dispatch({
			type: "INCREMENT_COUNTER"
		})
	}
})

export default connect(mapStateToPropsShort, mapDispatchToProps)(Counter)