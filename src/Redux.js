import { createStore } from "redux"

const reducer = (state, action) => {
	console.log("state", state, "action", action)
	if (action.type === "INCREMENT") {
		return {
			...state,
			count: state.count + 1
		}
	}
	return state
}

export const store = createStore(reducer, { count: 0 })