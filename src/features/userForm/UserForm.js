import React from "react"
import PropTypes from "prop-types"

export class UserForm extends React.PureComponent{
	render(){
		return (
			<form>
				<input type="text"/>
			</form>
		)
	}

	static propTypes = {
	}
}
export default UserForm