import PropTypes from "prop-types"

export const userEntity = PropTypes.shape({
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	description: PropTypes.string,
	disabled: PropTypes.bool,
	created: PropTypes.instanceOf(Date)
})