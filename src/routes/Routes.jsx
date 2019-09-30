import React from "react"
import { Route, Switch } from "react-router"

import Welcome from "../features/Welcome"
import Login from "../features/Login"
import NotFound from "../features/NotFound"

export const Routes = () => (
	<Switch>
		<Route path="/" exact component={Welcome}/>
		<Route path="/login" component={Login}/>
		<Route component={NotFound}/>
	</Switch>
)

export default Routes