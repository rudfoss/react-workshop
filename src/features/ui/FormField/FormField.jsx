import React from "react"
import PropTypes from "prop-types"

const genId = (() => {
	let counter = 0
	return () => `formfield-${Date.now()}-${counter++}`
})()

const addIdToFirstChild = (children, id) => {
	const [firstChild, ...remainingChildren] = React.Children.toArray(children)
	return [
		React.cloneElement(firstChild, { ...firstChild.props, id }),
		...remainingChildren
	]
}

export const FormField = ({ id, label, children }) => {
	const realId = id || genId()
	return (
		<div className="form-group">
			<label htmlFor={realId}>{label}</label>
			{addIdToFirstChild(children, realId)}
		</div>
	)
}
FormField.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
}

export default FormField