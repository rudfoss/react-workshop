import PropTypes from "prop-types"
import { uniqueId } from "../utils/uniqeId"

export const userProps = PropTypes.shape({
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
	id: uniqueId(),
	name: "",
	email: "",
	type: "User",
	password: "",
	disabled: false,
	comments: "",
	created: Date.now(),
	modified: Date.now()
})