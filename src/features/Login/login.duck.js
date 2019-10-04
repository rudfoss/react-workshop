import { createAction, handleActions } from "redux-actions"

const _ns = "login"
export const getState = state => state[_ns] || {}
const action = (actionName, payload) => createAction(_ns+"/"+actionName, payload)

export const setUsername = action("SET_USERNAME")
export const setPassword = action("SET_PASSWORD")
export const getUsername = (state) => getState(state).username || ""
export const getPassword = (state) => getState(state).password || ""

export const reducer = handleActions({
	[setUsername]: (state, { payload }) => ({
		...state,
		username: payload
	}),
	[setPassword]: (state, { payload }) => ({
		...state,
		password: payload
	}),
}, {})

export const duck = {
	ns: _ns,
	reducer
}