import { createStore, compose } from "redux"

const reducer = (state, action) => {
	if (action.type === "INCREMENT") {
		return {
			...state,
			count: state.count + 1
		}
	}
	if (action.type === "DECREMENT") {
		return {
			...state,
			count: state.count - 1
		}
	}
	if (action.type === "SET") {
		return {
			...state,
			count: action.payload
		}
	}
	return state
}

const debugComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(reducer, {
	count: 0,
	name: "",
	description: "",
	role: undefined,

	roles: [
		{
			value: "admin",
			label: "Administrator"
		},
		{
			value: "user",
			label: "User"
		}
	]
}, debugComposer())