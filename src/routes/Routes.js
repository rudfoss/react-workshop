import React from "react"
import { Switch, Route } from "react-router"
import NotFound from "../features/notFound"
import Users from "../features/users";

export class Routes extends React.PureComponent{
	render(){
		return (
			<Switch>
				<Route path="/" component={Users}/>
				<Route component={NotFound}/>
			</Switch>
		)
	}
}
export default Routes