import React from "react"
import UserForm from "./features/userForm"
import Users from "./features/users"
import newStore from "./store"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { Switch, Route } from "react-router"
import Header from "./features/header"

import "./App.scss"

export class App extends React.PureComponent {
	constructor(props) {
		super(props)
		this.store = newStore({
			userForm: {
				name: "",
				email: "",
				type: "User",
				password: "",
				disabled: false,
				comments: ""
			}
		})
		window.app = this
	}

	render() {
		return (
			<Provider store={this.store}>
				<BrowserRouter>
					<Header/>
					<Switch>
						<Route path="/" exact component={Users}/>
						<Route path="/new" exact component={UserForm}/>
						<Route path="/edit/:userId" component={UserForm}/>
						<Route render={() => (<div>Not found</div>)}/>
					</Switch>
				</BrowserRouter>
			</Provider>
		)
	}
}