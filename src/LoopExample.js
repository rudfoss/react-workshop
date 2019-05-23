import React from "react"
import PropTypes from "prop-types"

const users = [
	{
		name: "Iron Man"
	},
	{
		name: "Hulk"
	},
	{
		name: "Captain America"
	}
]

export const LoopExample = (props) => {
	return (
		<ul>
			{users.map((user, index) => (
				<li key={index}>{user.name}</li>
			))}
		</ul>
	)
}
LoopExample.propTypes = {
}
export default LoopExample