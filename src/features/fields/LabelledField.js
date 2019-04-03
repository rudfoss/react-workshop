import React from "react"
import PropTypes from "prop-types"

export class LabelledField extends React.PureComponent{
	render(){
		const {id, label, children} = this.props

		return (
			<div>
				<label htmlFor={id}>{label}</label>
				{this.childWithId()}
				{Array.isArray(children) && children.slice(1)}
			</div>
		)
	}

	childWithId() {
		const {children} = this.props
		const firstChild = Array.isArray(children) ? children[0] : children
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