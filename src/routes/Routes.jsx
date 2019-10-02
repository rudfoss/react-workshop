import React from "react"
import { Route, Switch } from "react-router"

import Welcome from "features/Welcome"

export const Routes = () => (
	<Switch>
		<Route path="/" exact component={Welcome}/>
	</Switch>
)

export default Routes