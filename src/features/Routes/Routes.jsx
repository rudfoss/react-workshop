import React from "react"
import { Route, Switch } from "react-router"

import Home from "features/Home"
import NotFound from "features/NotFound"

import Incrementer from "features/tasks/Incrementer"
import SharedIncrementer from "features/tasks/SharedIncrementer"

export const Routes = () => (
	<Switch>
		<Route path="/" exact component={Home}/>
		<Route path="/incrementer" exact component={Incrementer}/>
		<Route path="/shared-incrementer" exact component={SharedIncrementer}/>
		<Route component={NotFound}/>
	</Switch>
)

export default Routes