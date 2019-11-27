import React from "react"
import PropTypes from "prop-types"

export const Incrementer = ({ increment, decrement }) => (
	<div className="btn-group">
		<button className="btn btn-primary" onClick={increment}>Increment</button>
		<button className="btn btn-secondary	" onClick={decrement}>Decrement</button>
	</div>
)
Incrementer.propTypes = {
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired
}

export default Incrementer