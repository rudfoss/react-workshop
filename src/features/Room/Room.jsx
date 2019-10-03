import React from "react"
import PropTypes from "prop-types"

import classes from "./Room.scss"

export const Room = () => (
	<div className={classes.room}>
		<div className={classes.status}>
			<ul className={classes.participants}>
				<li>No participants</li>
			</ul>
			<ul className={classes.messages}>
				Chat
			</ul>
		</div>
		<div className={classes.chat}>
			<textarea></textarea>
		</div>
	</div>
)
Room.propTypes = {
	name: PropTypes.string
}

export default Room