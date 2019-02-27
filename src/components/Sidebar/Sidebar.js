import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"

import classes from "./Sidebar.scss"

export class Sidebar extends React.PureComponent{
	state = {
		visible: false
	}

	render(){
		return (
			<div className={cn(classes.sidebar, {[classes.show]: this.state.visible})}>
				<div className={classes.box}>
					{this.props.children}
				</div>
			</div>
		)
	}

	componentDidMount() {
		// We need react to mount the component in the DOM before we can apply the transitions
		// so "schedule" the state change for after the stack completes
		setTimeout(() => {
			this.setState({
				visible: true
			})
		})
	}

	static propTypes = {
		children: PropTypes.node
	}
}
export default Sidebar