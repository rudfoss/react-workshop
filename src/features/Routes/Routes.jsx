import React from "react"
import { Route, Switch } from "react-router"

import Home from "features/Home"
import NotFound from "features/NotFound"

import Increment from "features/Increment"
import IncrementDecrement from "features/IncrementDecrement"

export const Routes = () => (
	<Switch>
		<Route path="/" exact component={Home}/>
		<Route path="/increment" exact component={Increment}/>
		<Route path="/incdec" exact component={IncrementDecrement}/>
		<Route component={NotFound}/>
	</Switch>
)

export default Routes