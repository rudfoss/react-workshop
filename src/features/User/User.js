import React from "react"
import PropTypes from "prop-types"

export const User = ({
	authenticated, onAuthenticate
}) => (
	<table>
		<tbody>
			<tr>
				<th>Authenticated</th>
				<td><button type="button" onClick={onAuthenticate}>{authenticated ? "Yes" : "No"}</button></td>
			</tr>
		</tbody>
	</table>
)
User.propTypes = {
	authenticated: PropTypes.bool,
	onAuthenticate: PropTypes.func.isRequired
}
export default User