import React from "react"
import PropTypes from "prop-types"

export class LabelledField extends React.PureComponent{
	render(){
		return (
			<div>
				<label htmlFor={this.props.id}>{this.props.label}</label>
				{this.childWithId()}
				{this.remainingChildren}
			</div>
		)
	}

	get firstChild() {
		return Array.isArray(this.props.children) ?
			this.props.children[0] :
			this.props.children
	}
	get remainingChildren() {
		return Array.isArray(this.props.children) ?
			this.props.children.slice(1) : []
	}

	childWithId() {
		const {id} = this.props
		const firstChild = this.firstChild
		return React.cloneElement(firstChild, {
			...firstChild.props,
			id
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