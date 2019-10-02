import React from "react"
import { Route, Switch } from "react-router"

import Welcome from "features/Welcome"
import Login from "features/Login"
import CreateUser from "features/CreateUser"
import Chat from "features/Chat"

import NotFound from "features/NotFound"

export const Routes = () => (
	<Switch>
		<Route path="/" exact component={Welcome}/>
		<Route path="/login" component={Login}/>
		<Route path="/chat" component={Chat}/>
		<Route path="/create-user" component={CreateUser}/>
		<Route component={NotFound}/>
	</Switch>
)

export default Routes