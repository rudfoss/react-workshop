import React from "react"
import PropTypes from "prop-types"

import classes from "./Controls.scss"

export class Controls extends React.PureComponent{
	static propTypes = {
		children: PropTypes.node
	}

	render(){
		return (
			<div className={classes.controls}>
				{this.props.children}
			</div>
		)
	}
}
export default Controls