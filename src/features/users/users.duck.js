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
	}
}, {})
export default reducer