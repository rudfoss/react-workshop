import React from "react"
import PropTypes from "prop-types"

import classes from "./DescriptionField.scss"

export class DescriptionField extends React.PureComponent{
	static propTypes = {
		value: PropTypes.string,
		onChange: PropTypes.func.isRequired,

		maxLength: PropTypes.number
	}
	static defaultProps = {
		maxLength: -1
	}

	onChange = (evt) => {
		const text = evt.target.value
		if (this.props.maxLength > 0 && text.length > this.props.maxLength) {
			return
		}

		this.props.onChange(text)
	}

	render() {
		return (
			<>
				<textarea className={classes.descriptionField} {...this.props} onChange={this.onChange}/>
				{this.props.maxLength >= 0 && (
					<span>{this.props.value.length} / {this.props.maxLength}</span>
				)}
			</>
		)
	}
}
export default DescriptionField