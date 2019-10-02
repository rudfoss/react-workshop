import React from "react"
import PropTypes from "prop-types"

export const Room = ({ name }) => (
	<div>
		{name}
	</div>
)
Room.propTypes = {
	name: PropTypes.string
}

export default Room