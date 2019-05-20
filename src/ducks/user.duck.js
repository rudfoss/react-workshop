import { createAction as createReduxAction, handleActions } from "redux-actions"

const _ns = "@user/"
export const getState = globalState => globalState.user || {}
const createAction = (action, payload) => createReduxAction(_ns+action, payload)

export const isAuthenticated = state => !!getState(state).authenticated
export const setAuthenticated = createAction("SET_AUTHENTICATED", (flag = true) => !!flag)
export const flipAuthenticated = createAction("FLIP_AUTHENTICATED")

export const reducer = handleActions({
	[setAuthenticated]: (state, {payload}) => ({
		...state,
		authenticated: payload
	}),
	[flipAuthenticated]: (state) => ({
		...state,
		authenticated: !state.authenticated
	})
}, {})
export default reducer