import { connect } from "react-redux"
import Counter from "./Counter"

// This is equivalent to the function below
const mapStateToProps = (state) => {
	return {
		count: state.counter
	}
}
const mapStateToPropsShort = (state) => ({
	count: state.counter
})

export default connect(mapStateToPropsShort)(Counter)