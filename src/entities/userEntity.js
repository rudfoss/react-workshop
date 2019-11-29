import PropTypes from "prop-types"

export const userEntity = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string,
	role: PropTypes.shape({
		value: PropTypes.string.isRequired,
		label: PropTypes.string
	})
}

export const newUserEntity = (original, changedProps) => ({
	...original,
	...changedProps
})

export default userEntity 