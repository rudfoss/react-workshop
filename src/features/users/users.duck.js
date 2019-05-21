import { createAction, handleActions } from "redux-actions"
import omit from "lodash/omit"

const _ns = "users/"
export const getState = (globalState) => globalState.users || {}
const action = (actionName, payload) => createAction(_ns+actionName, payload)

export const getUserIds = (globalState) => getState(globalState).order || []
export const getUserById = (globalState, id) => (getState(globalState).byId || {})[id]
export const getUsers = (globalState) => {
	return getUserIds(globalState).map(id => getUserById(globalState, id))
}
export const setUsers = action("SET_USERS")

export const removeUserById = action("REMOVE_USER_BY_ID")
export const setUser = action("SET_USER")

export const isWorking = (globalState) => !!getState(globalState).working
export const setWorking = action("SET_IS_WORKING", (flag = true) => (flag || false))
export const getWorkError = (globalState) => getState(globalState).error
export const setError = action("SET_ERROR")

export const fetchUsers = () => async (dispatch, getState) => {
	if (isWorking(getState())) return
	dispatch(setWorking())
	dispatch(setError())
	try {
		const response = await fetch("http://localhost:1339")
		const data = await response.json()
		dispatch(setUsers(data))
	} catch (error) {
		dispatch(setError(error))
	} finally {
		dispatch(setWorking(false))
	}
}
export const storeUsers = () => async (dispatch, getState) => {
	const state = getState()
	if (isWorking(state)) return
	dispatch(setWorking())
	dispatch(setError())
	try {
		const data = getUsers(state)
		await fetch("http://localhost:1339", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		})
	} catch (error) {
		dispatch(setError(error))
	} finally {
		dispatch(setWorking(false))
	}
}

export const reducer = handleActions({
	[removeUserById]: (state, { payload }) => ({
		...state,
		order: state.order.filter(orderId => orderId !== payload),
		byId: omit(state.byId, payload)
	}),
	[setUser]: (state, { payload }) => {
		let newOrder = state.order || []
		if (newOrder.indexOf(payload.id) === -1) {
			newOrder.push(payload.id)
		}
		return {
			...state,
			order: newOrder,
			byId: {
				...(state.byId || {}),
				[payload.id]: payload
			}
		}
	},
	[setUsers]: (state, { payload }) => ({
		...state,
		order: payload.map(user => user.id),
		byId: payload.reduce((acc, user) => {
			acc[user.id] = user
			return acc
		}, {})
	}),
	[setWorking]: (state, { payload }) => ({
		...state,
		working: payload
	}),
	[setError]: (state, { payload, error }) => {
		return {
			...state,
			error: error ? payload.message : payload
		}
	}
}, {})
export default reducer