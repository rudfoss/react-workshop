import React from "react"
import PropTypes from "prop-types"

export const Message = ({ id, sent, author, message }) => (
	<div title={id}>
		{`${author} (${(new Date(sent)).toTimeString().substr(0,8)}): ${message}`}
	</div>
)
Message.propTypes = {
	id: PropTypes.string.isRequired,
	sent: PropTypes.number.isRequired,
	author: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired
}

export default Message