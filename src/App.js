import React from "react"
import UserList from "./components/UserList"

import "./styles/App.scss"

export class App extends React.PureComponent {
	state = {
		users: []
	}

	onNewUser = (newUser) => {
		// eslint-disable-next-line no-console
		console.log(newUser)
	}

	render() {
		return (
			<UserList users={this.state.users} onNewClick={this.onNewUser}/>
		)
	}
}
export default App