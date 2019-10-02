import React from "react"
import PropTypes from "prop-types"

// export function MyButton() {
export const MyButton = (props) => {
	return (
		<button onClick={props.onClick}>{props.count}</button>
	)
}
MyButton.propTypes = {
	count: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired
}

// export class MyButton extends React.Component {
// 	state = {
// 		count: 0
// 	}

// 	render() {
// 		return (
// 			<button onClick={() => this.setState({
// 				count: this.state.count + 1
// 			})}>{this.state.count}</button>
// 		)
// 	}
// }