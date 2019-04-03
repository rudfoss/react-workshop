import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

export class HeaderFooterFrame extends React.PureComponent{
	render(){
		const {children} = this.props
		return (
			<>
				<header>
					<h1>Next-gen user database v2.0 final</h1>
				</header>
				<nav>
					<ul>
						<li>
							<Link to="/new">New</Link>
						</li>
					</ul>
				</nav>
				<div>
					{children}
				</div>
				<footer>
					Footer
				</footer>
			</>
		)
	}

	static propTypes = {
		children: PropTypes.oneOfType([
			PropTypes.node,
			PropTypes.arrayOf(PropTypes.node)
		])
	}
}
export default HeaderFooterFrame