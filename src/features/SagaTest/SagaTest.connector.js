import { connect } from "react-redux"
import SagaTest from "./SagaTest"

import * as sagaTestDuck from "./sagaTest.duck"

const mapStateToProps = (state) => ({
	loading: sagaTestDuck.isLoading(state),
	result: sagaTestDuck.getResult(state)
})
const mapDispatchToProps = (dispatch) => ({
	onStart: () => dispatch(sagaTestDuck.fetchResult(5000))
})
export default connect(mapStateToProps, mapDispatchToProps)(SagaTest)