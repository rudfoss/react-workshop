import React from "react"
import PropTypes from "prop-types"

export class Counter extends React.PureComponent {
	render() {
		const { count, newCount, onIncrement, onNewCountChange, onSetCount } = this.props

		return (
			<>
				<span>{count}</span>
				<button
					type="button"
					onClick={onIncrement}>Increment</button>
				<fieldset>
					<legend>New count</legend>
					<input type="text" value={newCount} onChange={onNewCountChange}/>
					<button type="button" onClick={onSetCount}>Set</button>
				</fieldset>
			</>
		)
	}

	static propTypes = {
		count: PropTypes.number.isRequired,
		newCount: PropTypes.string.isRequired,

		onIncrement: PropTypes.func.isRequired,
		onNewCountChange: PropTypes.func.isRequired,
		onSetCount: PropTypes.func.isRequired
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
