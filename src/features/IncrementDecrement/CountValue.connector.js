import { connect } from "react-redux"
import CountValue from "./CountValue"

import * as countDuck from "./count.duck"

const mapStateToProps = (state) => ({
	count: countDuck.getCount(state)
})
const mapDispatchToProps = (dispatch) => ({
	setCount: (newCount) => {
		dispatch(countDuck.setCount(newCount))
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(CountValue)