import PropTypes from "prop-types"

export const userEntity = PropTypes.shape({
	id: PropTypes.string.isRequired,
	name: PropTypes.string,
	type: PropTypes.string,
	description: PropTypes.string,
	disabled: PropTypes.bool,
	created: PropTypes.instanceOf(Date)
})