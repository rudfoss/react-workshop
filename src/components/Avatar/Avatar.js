import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"

import classes from "./Avatar.scss"

export class Avatar extends React.PureComponent{
	static propTypes = {
		value: PropTypes.string,
		canChange: PropTypes.bool,
		size: PropTypes.string,
		onChange: PropTypes.func
	}

	render(){
		return (
			<div className={classes.container}>
				<div
					className={cn(classes.avatar, {[classes.hasImage]: !!this.props.value})}
					onClick={this.onClick}
					style={{
						backgroundImage: `url("${this.props.value}")`,
						width: this.props.size,
						height: this.props.size
					}}>
				</div>
			</div>
		)
	}

	onClick = () => {
		if (!this.props.canChange) return
		const promptValue = prompt("Paste an image url", this.props.value)
		if (promptValue != null) {
			this.props.onChange(promptValue)
		}
	}
}
export default Avatar