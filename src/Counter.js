import React from "react"
import { connect } from "react-redux"

const PureCounter = (props) => (
	<span>New count {props.count}</span>
)

export const Counter = connect(
	(state) => {
		return {
			count: state.counter
		}
	}
)(PureCounter)