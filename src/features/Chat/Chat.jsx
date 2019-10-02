import React from "react"
import PropTypes from "prop-types"
import { Switch, Route } from "react-router-dom"

import RoomList from "features/RoomList"
import Room from "features/Room"
import NotFound from "features/NotFound"

import Header from "./Header.connector"

import classes from "./Chat.scss"

export const Chat = ({ match }) => {
	const subPath = (path = "/") => `${match.url}${path}`
	return (
		<div className={classes.chat}>
			<Header/>
			<Switch>
				<Route path={subPath()} exact component={RoomList}/>
				<Route path={subPath(":name")} component={Room}/>
				<Route component={NotFound}/>
			</Switch>
		</div>
	)
}
Chat.propTypes = {
	match: PropTypes.any
}

export default Chat