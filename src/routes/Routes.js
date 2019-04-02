import React from "react"
import { Switch, Route } from "react-router"
import NotFound from "../features/notFound"
import Users from "../features/users"
import UserForm from "../features/userForm"


export class Routes extends React.Component{
	render(){
		return (
			<Switch>
				<Route path="/" exact component={Users}/>
				<Route path="/:id/edit" component={UserForm}/>
				<Route component={NotFound}/>
			</Switch>
		)
	}
}
export default Routes