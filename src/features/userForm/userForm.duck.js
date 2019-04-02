import {createAction, handleActions} from "redux-actions"

const _ns = "userForm/"
export const getState = state => state.userForm || {}
const action = (actionName, payload) => createAction(_ns+actionName, payload)

export const getEditingUser = (globalState) => getState(globalState).editingUser
export const setEditingUser = action("SET_EDITING_USER")

export const reducer = handleActions({
	[setEditingUser]: (state, {payload}) => ({
		...state,
		editingUser: payload
	})
}, {})
export default reducer