import { createAction, handleActions } from "redux-actions"

const _ns = "users/"
export const getState = state => state.users || {}
const action = (actionName, payload) => createAction(_ns+actionName, payload)

export const getUserById = (state, id) => (getState(state).byId || {})[id]
export const getUserIds = (state) => getState(state).order || []
export const getUsers = (state) => {
	return getUserIds(state).map((userId) => getUserById(state, userId))
}

export const setUser = action("SET_USER")

export const reducer = handleActions({
	[setUser]: (state, { payload }) => {
		let newOrder = state.order || []
		if (newOrder.indexOf(payload.id) === -1) {
			newOrder = newOrder.slice()
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

		/* What is actually happening above
		let newState = {}
		newState.byId = state.byId
		newState.order = state.order
		newState.byId = {}
		newState.byId["a"] = state.byId["a"]
		newState.byId["b"] = state.byId["b"]
		// ...
		newState.byId["b"] = payload
		*/
	}
}, {})
export default reducer