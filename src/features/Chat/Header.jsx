import React from "react"
import PropTypes from "prop-types"

import Button from "ui/Button"

import classes from "./Header.scss"

const historyPush = (path, history) => () => {
	history.push(path)
}

export const Header = ({ username, roomName, roomHidden, history, onLogout }) => (
	<header className={classes.header}>
		<div>{username}{roomName && (` - ${roomHidden ? "👻" : ""}${roomName}`)}</div>
		<Button className={classes.right} mode="secondary" onClick={historyPush("/chat", history)}>Rooms</Button>
		<Button mode="secondary" onClick={onLogout}>Log out</Button>
	</header>
)
Header.propTypes = {
	username: PropTypes.string.isRequired,
	roomName: PropTypes.string,
	roomHidden: PropTypes.bool,
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired,

	onLogout: PropTypes.func.isRequired
}

export default Header