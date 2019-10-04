import React from "react"
import { Route, Switch } from "react-router"

import Welcome from "features/Welcome"
import CreateUser from "features/CreateUser"
import Login from "features/Login"

export const Routes = () => (
	<Switch>
		<Route path="/" exact component={Welcome}/>
		<Route path="/login" component={Login}/>
		<Route path="/create-user" component={CreateUser}/>
		<Route render={() => <h1>Not found</h1>}/>
	</Switch>
)

export default Routes