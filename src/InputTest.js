import React from "react"
import PropTypes from "prop-types"

export class InputTest extends React.PureComponent{
	onInputChange = (evt) => {
		this.props.onChange(evt.target.value)
	}

	render(){
		const {name = ""} = (this.props || {})

		return (
			<input
				type="text"
				value={name}
				onChange={this.onInputChange}
				placeholder="Name goes here"/>)
	}

	static propTypes = {

	}
}
export default InputTest