import React from "react"
import PropTypes from "prop-types"

import classes from "./Field"

export class Field extends React.PureComponent{
	render(){
		const {label, id} = this.props

		return (
			<div className={classes.field}>
				<label htmlFor={id}>{label}</label>
				{this.renderFirstChild()}
			</div>
		)
	}

	renderFirstChild() {
		const {children} = this.props
		const firstChild = Array.isArray(children) ? children[0] : children
		return React.cloneElement(firstChild, {
			...firstChild.props,
			id: this.props.id
		})
	}

	static propTypes = {
		label: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		children: PropTypes.element.isRequired
	}
}
export default Field