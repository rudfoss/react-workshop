import React from "react"
import PropTypes from "prop-types"

export class LabelledField extends React.PureComponent{
	render(){
		return (
			<div>
				<label htmlFor={this.props.id}>{this.props.label}</label>
				{this.childWithId()}
			</div>
		)
	}

	childWithId() {
		const {children, id} = this.props
		return React.cloneElement(children, {
			...children.props,
			id
		})
	}

	static propTypes = {
		id: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		children: PropTypes.element.isRequired
	}
}
export default LabelledField