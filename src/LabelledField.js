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

	get firstChild() {
		if (Array.isArray(this.props.children)) {
			return this.props.children[0]
		}
		return this.props.children
	}
	childWithId() {
		const firstChild = this.firstChild
		if (!firstChild) return null
		return React.cloneElement(firstChild, {
			...firstChild.props,
			id: this.props.id
		})
	}

	static propTypes = {
		id: PropTypes.string.isRequired,
		label: PropTypes.string.isRequired,
		children: PropTypes.oneOfType([
			PropTypes.element,
			PropTypes.arrayOf(PropTypes.element)
		]).isRequired
	}
}
export default LabelledField