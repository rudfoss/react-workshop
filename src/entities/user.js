import PropTypes from "prop-types"
import { uniqueId } from "../utils/uniqeId"

const newId = uniqueId("user")

export const userProps = PropTypes.shape({
	id: PropTypes.string.isRequired,
	name: PropTypes.string,
	email: PropTypes.string,
	type: PropTypes.string,
	password: PropTypes.string,
	disabled: PropTypes.bool,
	comments: PropTypes.string,
	created: PropTypes.instanceOf(Date),
	modified: PropTypes.instanceOf(Date)
})

export const newUser = () => ({
	id: newId(),
	name: "",
	email: "",
	type: "User",
	password: "",
	disabled: false,
	comments: "",
	created: new Date(),
	modified: new Date()
})