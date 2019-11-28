import { createStore } from "redux"

const reducer = (state, action) => {
	console.log("state", state, "action", action)
	return state
}

export const store = createStore(reducer, {})