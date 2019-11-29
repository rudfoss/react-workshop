import React from "react"
import PropTypes from "prop-types"

export const SagaTest = ({ onStart, loading, result }) => {
	let msg = "Click button to begin"
	if (loading) {
		msg = "Loading..."
	}
	if (result) {
		msg = result
	}
	
	return (
		<div>
			<strong>{msg}</strong>
			<button onClick={onStart}>Go!</button>
		</div>
	)
}
SagaTest.propTypes = {
	onStart: PropTypes.func.isRequired,
	loading: PropTypes.bool,
	result: PropTypes.string
}

export default SagaTest