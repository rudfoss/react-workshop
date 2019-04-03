import React from "react"
import PropTypes from "prop-types"

export class LabelledField extends React.PureComponent{
	render(){
		const {id, label} = this.props

		return (
			<div>
				<label htmlFor={id}>{label}</label>
				{this.childWithId()}
				{this.remainingChildren}
			</div>
		)
	}

	get firstChild() {
		return Array.isArray(this.props.children) ? this.props.children[0] : this.props.children
	}
	get remainingChildren() {
		return Array.isArray(this.props.children) ? this.props.children.slice(1) : []
	}

	childWithId() {
		const firstChild = this.firstChild
		return React.cloneElement(firstChild, {
			...firstChild.props,
			id: firstChild.props.id || this.props.id
		})
	}

	static propTypes = {
		id: PropTypes.string.isRequired,
		label: PropTypes.string,
		children: PropTypes.oneOfType([
			PropTypes.element,
			PropTypes.arrayOf(PropTypes.element)
		])
	}
}
export default LabelledField