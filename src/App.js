import React from "react"
import UserList from "./components/UserList"
import NewUser from "./components/NewUser"
import { createStore } from "./store/createStore"

import "./styles/App.scss"

export class App extends React.PureComponent {
	state = {
		users: [
			{
				"id": "29f98d1d-3aab-4f59-9b3f-4bb9bf6f406f",
				"created": "Tue Oct 30 2018 21:24:57 GMT+0100 (Central European Standard Time)",
				"avatar": "https://i.imgur.com/rGwV1qt.jpg",
				"name": "Admin",
				"type": "Admin",
				"description": "All hail the admin!"
			},
			{
				"id": "29f98d1d-3aab-4f59-9b3f-4bb9bf6f406e",
				"created": "Tue Oct 30 2018 21:24:57 GMT+0100 (Central European Standard Time)",
				"avatar": "https://i.imgur.com/rGwV1qt.jpg",
				"name": "Admin",
				"type": "Admin",
				"description": "All hail the admin!"
			}
		]
	}

	constructor() {
		super()
		this.store = createStore()
		window.app = this
	}

	onNewUser = (newUser) => {
		// eslint-disable-next-line no-console
		console.log(newUser)
	}

	render() {
		return (
			<>
				<UserList users={this.state.users} onNewClick={this.onNewUser}/>
				<NewUser/>
			</>
		)
	}
}
export default App