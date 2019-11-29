import { createAction, handleActions } from "redux-actions"

export const ns = "count"
export const getState = state => state[ns] || {}

export const getCount = (state) => getState(state).count || 0

export const setCount = createAction(ns+"/SET")
export const increment = createAction(ns+"/INCREMENT")
export const decrement = createAction(ns+"/DECREMENT")

export const reducer = handleActions({
	[setCount]: (state, action) => {
		return {
			...state,
			count: action.payload
		}
	},
	[increment]: (state) => {
		return {
			...state,
			count: (state.count || 0) + 1
		}
	},
	[decrement]: (state) => {
		return {
			...state,
			count: (state.count || 0) - 1
		}
	}
}, {})

export default reducer