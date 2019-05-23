import React from "react"

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

export const LoopExample = () => {
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