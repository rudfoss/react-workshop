import PropTypes from "prop-types"
import uid from "uuid/v4"

export const userEntity = PropTypes.shape({
	id: PropTypes.string.isRequired,
	name: PropTypes.string,
	email: PropTypes.string,
	type: PropTypes.string,
	password: PropTypes.string,
	disabled: PropTypes.bool,
	comments: PropTypes.string,
	created: PropTypes.number,
	modified: PropTypes.number
})

export const newUser = () => ({
	id: uid(),
	name: "",
	type: "User",
	password: "",
	disabled: false,
	comments: "",
	created: Date.now(),
	modified: Date.now()
})