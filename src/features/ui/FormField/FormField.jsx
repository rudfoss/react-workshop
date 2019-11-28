import React from "react"
import PropTypes from "prop-types"

const genId = (() => {
	let id = 0
	return () => {
		return `formfield-${Date.now()}-${id++}`
	}
})()

const addIdToFirstChild = (children, id) => {
	const [firstChild, ...remainingChildren] = React.Children.toArray(children)
	return [
		React.cloneElement(firstChild, { id }),
		...remainingChildren
	]
}

export const FormFieldTask = ({ id, label, children }) => {
	const realId = id || genId()
	return (
		<div className="form-group">
			<label htmlFor={realId}>{label}</label>
			{addIdToFirstChild(children, realId)}
		</div>
	)
}
FormFieldTask.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string.isRequired,
	children: PropTypes.oneOf(
		PropTypes.elementType,
		PropTypes.arrayOf(PropTypes.elementType)
	)
}

export default FormFieldTask