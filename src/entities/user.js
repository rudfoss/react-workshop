import PropTypes from "prop-types"

export const userEntity = PropTypes.shape({
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	created: PropTypes.instanceOf(Date)
})