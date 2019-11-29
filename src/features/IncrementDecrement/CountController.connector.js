import { connect } from "react-redux"
import CountController from "./CountController"

import * as countDuck from "./count.duck"

const mapStateToProps = (state) => ({})
const mapDispatchToProps = (dispatch) => ({
	increment: () => {
		dispatch(countDuck.increment())
	},
	decrement: () => {
		dispatch(countDuck.decrement())
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(CountController)