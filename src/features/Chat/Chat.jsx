import React from "react"
import PropTypes from "prop-types"
import { Switch, Route, Redirect } from "react-router-dom"

import RoomList from "features/RoomList"
import Room from "features/Room"
import NotFound from "features/NotFound"

import Header from "./Header.connector"

import classes from "./Chat.scss"

export const Chat = ({ isAuthenticated, match }) => {
	const subPath = (path = "/") => `${match.url}${path}`
	if (!isAuthenticated) {
		return (<Redirect to="/login"/>)
	}
	return (
		<div className={classes.chat}>
			<Header/>
			<Switch>
				<Route path={subPath("/:name")} component={Room}/>
				<Route path={subPath()} component={RoomList}/>
				<Route component={NotFound}/>
			</Switch>
		</div>
	)
}
Chat.propTypes = {
	match: PropTypes.any,
	isAuthenticated: PropTypes.bool
}

export default Chat