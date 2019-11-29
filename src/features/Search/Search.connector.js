import { connect } from "react-redux"
import Search from "./Search"

import * as searchDucks from "./search.duck"

const mapStateToProps = (state) => ({
	text: searchDucks.getText(state),
	results: searchDucks.getResults(state)
})
const mapDispatchToProps = (dispatch) => ({
	onChange: (newText) => {
		dispatch(searchDucks.setText(newText))
		dispatch(searchDucks.searchForText())
	}
})
export default connect(mapStateToProps, mapDispatchToProps)(Search)