import React from "react"
import PropTypes from "prop-types"
import { NavLink } from "react-router-dom"
import classes from "./headerFooterFrame.scss"

export class HeaderFooterFrame extends React.PureComponent{
	render(){
		const {children} = this.props
		return (
			<>
				<header className={classes.header}>
					<h1>Next-gen user database v2.0 final</h1>
				</header>
				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink to="/" exact activeClassName={classes.active}>Home</NavLink>
						</li>
						<li>
							<NavLink to="/new" activeClassName={classes.active}>New</NavLink>
						</li>
						<li>
							<button onClick={this.props.onSave}>Save</button>
						</li>
						<li>
							<button onClick={this.props.onLoad}>Load</button>
						</li>
					</ul>
				</nav>
				<div className={classes.content}>
					{children}
				</div>
				<footer className={classes.footer}>
					<span>
						{this.props.userCount} users
					</span>
				</footer>
			</>
		)
	}

	static propTypes = {
		children: PropTypes.oneOfType([
			PropTypes.node,
			PropTypes.arrayOf(PropTypes.node)
		]),
		userCount: PropTypes.number,

		onSave: PropTypes.func.isRequired,
		onLoad: PropTypes.func.isRequired
	}
}
export default HeaderFooterFrame