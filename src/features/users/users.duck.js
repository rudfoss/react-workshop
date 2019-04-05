import {createAction, handleActions} from "redux-actions"
import omit from "lodash/omit"

const _ns = "users/"
export const getState = state => state.users || {}
const action = (actionName, payload) => createAction(_ns+actionName, payload)

export const getUserIds = (globalState) => getState(globalState).order || []
export const getUserById = (globalState, userId) => (getState(globalState).byId || {})[userId]
export const getUsers = (globalState) => {
	return getUserIds(globalState).map(userId => getUserById(globalState, userId))
}

export const isWorking = (globalState) => !!getState(globalState).isWorking
export const setIsWorking = action("SET_IS_WORKING", (flag = true) => (!!flag))

export const fetchUsers = () => async (dispatch, getState) => {
	const response = await fetch("http://localhost:1339/")
	const data = await response.json()

}
export const saveUser = () => async (dispatch, getState) => {
	dispatch(setIsWorking())
	const response = await fetch("http://localhost:1339/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(getUsers(getState()))
	})
	dispatch(setIsWorking(false))
}

export const removeUserById = action("REMOVE_USER_BY_ID")
export const setUser = action("SET_USER")

export const reducer = handleActions({
	[removeUserById]: (state, action) => {
		return {
			...state,
			order: (state.order || []).filter(orderId => orderId !== action.payload),
			byId: omit(state.byId || {}, action.payload)
		}
	},
	[setUser]: (state, action) => {
		let newOrder = state.order || []
		if (newOrder.indexOf(action.payload.id) === -1) {
			newOrder = newOrder.slice()
			newOrder.push(action.payload.id)
		}
		return {
			...state,
			order: newOrder,
			byId: {
				...(state.byId || {}),
				[action.payload.id]: action.payload
			}
		}
	},
	[setIsWorking]: (state, {payload}) => {
		return {
			...state,
			isWorking: payload
		}
	}
}, {})
export default reducer