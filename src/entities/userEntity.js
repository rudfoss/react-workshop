import PropTypes from "prop-types"

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
	id: "",
	name: "",
	type: "User",
	password: "",
	disabled: false,
	comments: "",
	created: Date.now(),
	modified: Date.now()
})