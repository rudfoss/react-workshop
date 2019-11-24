import React from "react"
import PropTypes from "prop-types"

export const NotFound = ({ location }) => (
	<div>
		<h1>Path &quot;{location.pathname}&quot; found</h1>
	</div>
)
NotFound.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string
	})
}

export default NotFound