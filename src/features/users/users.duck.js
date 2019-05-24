import { createAction, handleActions } from "redux-actions"

const _ns = "users/"
export const getState = state => state.users || {}
const action = (actionName, payload) => createAction(_ns+actionName, payload)

export const getUserById = (state, id) => (getState(state).byId || {})[id]
export const getUserIds = (state) => getState(state).order || []
export const getUsers = (state) => {
	return getUserIds(state).map((userId) => getUserById(state, userId))
}

export const reducer = handleActions({

}, {})
export default reducer