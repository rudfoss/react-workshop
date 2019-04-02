import {createAction, handleActions} from "redux-actions"

const _ns = "users/"
export const getState = (globalState) => globalState.users || {}
const action = (actionName, payload) => createAction(ns+actionName, payload)

export const getUserIds = (globalState) => getState(globalState).order || []
export const getUserById = (globalState, id) => (getState(globalState).byId || {})[id]
export const getUsers = (globalState) => {
	return getUserIds(globalState).map(id => getUserById(globalState, id))
}

export const reducer = handleActions({

}, {})