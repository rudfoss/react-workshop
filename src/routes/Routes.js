import React from "react"
import UserList from "../components/UserList"
import NewUser from "../components/NewUser"
import {Route} from "react-router"

export class Routes extends React.Component{
	render(){
		return (
			<>
				<UserList/>
				<Route path="/new" component={NewUser}/>
			</>
		)
	}
}
export default Routes