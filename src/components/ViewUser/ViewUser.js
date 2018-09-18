import React from "react"
import PropTypes from "prop-types"

export class ViewUser extends React.PureComponent{
	render(){
		return (
			<div>
				<h2>{this.props.name}</h2>
				<p>{this.props.id}</p>
				<p>{this.props.type}</p>
				<p>{this.props.description}</p>
			</div>
		)
	}

	static propTypes = {
		id: PropTypes.string,
		name: PropTypes.string,
		type: PropTypes.string,
		description: PropTypes.string
	}
}
export default ViewUser