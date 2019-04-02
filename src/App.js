import React from "react"
import PropTypes from "prop-types"
import Users from "./features/users";

const users = [
	{id: "test", name: "test", type: "test", created: new Date()}
]

export class App extends React.PureComponent{
	render(){
		return (
			<div>
				<Users users={users}/>
			</div>	
		)
	}

	static propTypes = {
	}
}
export default App