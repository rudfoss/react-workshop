import React from "react"
import CountValue from "./CountValue.connector"
import CountController from "./CountController.connector"

export const Count = () => (
	<>
		<CountValue/>
		<CountController/>
	</>
)

export default Count