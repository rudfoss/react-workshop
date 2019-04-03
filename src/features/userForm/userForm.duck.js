import {createAction, handleActions} from "redux-actions"

const _ns = "userForm/"
export const getState = state => state.userForm || {}
const action = (actionName, payload) => createAction(_ns+actionName, payload)

export const getEditingUser = (globalState) => getState(globalState).editingUser
export const setEditingUser = action("SET_EDITING_USER")
export const clearEditingUser = () => setEditingUser({})
export const setEditingUserField = action("SET_EDITING_USER_FIELD", (name, value) => ({name, value}))

export const setMode = action("SET_MODE")

export const getTypes = (globalState) => getState(globalState).types || ["Read-only", "User", "Manager", "Administrator", "Sysadmin"]

export const reducer = handleActions({
	[setEditingUser]: (state, {payload}) => ({
		...state,
		editingUser: payload
	}),
	[setEditingUserField]: (state, {payload}) => ({
		...state,
		editingUser: {
			...state.editingUser,
			[payload.name]: payload.value
		}
	}),
	[setMode]: (state, {payload}) => ({
		...state,
		mode: payload
	})
}, {})
export default reducer