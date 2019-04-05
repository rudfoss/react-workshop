import React from "react"
import { Switch, Route } from "react-router"
import { NavLink } from "react-router-dom"
import Users from "../features/users"
import UserForm from "../features/userForm"

export class Routes extends React.Component{
	render(){
		return (
			<>
				<nav>
					<NavLink exact to="/">Home</NavLink>
					<NavLink to="/new">New user</NavLink>
				</nav>
				<Switch>
					<Route path="/" exact component={Users}/>
					<Route path="/new" component={UserForm}/>
					<Route render={() => <div>NOT FOUND</div>}/>
				</Switch>
			</>
		)
	}
}
export default Routes