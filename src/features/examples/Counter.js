import React from "react"
import PropTypes from "prop-types"

export class Counter extends React.PureComponent {
	render() {
		const { count, onIncrement } = this.props

		return (
			<>
				<span>{count}</span>
				<button
					type="button"
					onClick={onIncrement}>Increment</button>
			</>
		)
	}

	static propTypes = {
		count: PropTypes.number.isRequired,
		onIncrement: PropTypes.func.isRequired
	}
}
export default Counter

/*
export const Counter = () => {
	const [count, setCount] = useState(0)

	return (
		<>
			<span>{count}</span>
			<button
				type="button"
				onClick={() => setCount(count + 1)}>Increment</button>
		</>
	)
}*/
