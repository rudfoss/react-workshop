import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import cn from "classnames"

import classes from "./Sidebar.scss"

export const Sidebar = ({children}) => {
	const [visible, setVisible] = useState(false)
	useEffect(() => {
		setVisible(true)
	}, []) // Empty array means we don't depend on state so the effect will not re-run

	return (
		<div className={cn(classes.sidebar, {[classes.show]: visible})}>
			<div className={classes.box}>
				{children}
			</div>
		</div>
	)
}
Sidebar.propTypes = {
	children: PropTypes.node
}

/*
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
*/
export default Sidebar