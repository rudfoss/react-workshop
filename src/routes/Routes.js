import React from "react"
import { Switch, Route } from "react-router"
import NotFound from "../features/notFound"
import Users from "../features/users"
import UserForm from "../features/userForm"
import HeaderFooterFrame from "../features/headerFooterFrame/HeaderFooterFrame"


export class Routes extends React.Component{
	render(){
		return (
			<HeaderFooterFrame>
				<Switch>
					<Route path="/" exact component={Users}/>
					<Route path="/:id/:mode" component={UserForm}/>
					<Route path="/new" component={UserForm}/>
					<Route component={NotFound}/>
				</Switch>
			</HeaderFooterFrame>
		)
	}
}
export default Routes