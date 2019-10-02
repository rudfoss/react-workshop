import React from "react"

// export const MyButton = () => {
export function MyButton() {
	return (
		<button onClick={() => alert("hello world")}>Click me</button>
	)
}

// export class MyButton extends React.Component {
// 	render() {
// 		return (
// 			<button onClick={() => alert("hello world")}>Click me</button>
// 		)
// 	}
// }