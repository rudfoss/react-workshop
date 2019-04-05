import {createAction, handleActions} from "redux-actions"

const _ns = "users/"
export const getState = state => state.users || {}
const action = (actionName, payload) => createAction(_ns+actionName, payload)

export const getUserIds = (globalState) => getState(globalState).order || []
export const getUserById = (globalState, userId) => (getState(globalState).byId || {})[userId]
export const getUsers = (globalState) => {
	return getUserIds(globalState).map(userId => getUserById(globalState, userId))
}

export const reducer = handleActions({}, {})
export default reducer