import React from "react"
import { Route, Switch } from "react-router"

import Home from "features/Home"
import NotFound from "features/NotFound"

import Increment from "features/Increment"
import IncrementDecrement from "features/IncrementDecrement"
import FormTest from "features/FormTest"
import NewUserForm from "features/NewUserForm"

export const Routes = () => (
	<Switch>
		<Route path="/" exact component={Home}/>
		<Route path="/increment" exact component={Increment}/>
		<Route path="/incdec" exact component={IncrementDecrement}/>
		<Route path="/formtest" exact component={FormTest}/>
		<Route path="/newuser" exact component={NewUserForm}/>
		<Route component={NotFound}/>
	</Switch>
)

export default Routes