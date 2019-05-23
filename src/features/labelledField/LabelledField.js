import React from "react"
import PropTypes from "prop-types"

import classes from "./LabelledField.scss"

export class LabelledField extends React.PureComponent{
	render(){
		return (
			<div className={classes.field}>
				<label htmlFor={this.props.id}>{this.props.label}</label>
				{this.childWithId()}
				{this.remainingChildren}
			</div>
		)
	}

	get firstChild() {
		if (Array.isArray(this.props.children)) {
			return this.props.children[0]
		}
		return this.props.children
	}
	get remainingChildren() {
		return Array.isArray(this.props.children) ? this.props.children.slice(1) : []
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