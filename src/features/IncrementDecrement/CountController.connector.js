import { connect } from "react-redux"
import CountController from "./CountController"

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
	increment: () => {
		dispatch({
			type: "INCREMENT"
		})
	},
	decrement: () => {
		dispatch({
			type: "DECREMENT"
		})
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(CountController)