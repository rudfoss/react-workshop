import {createAction, handleActions} from "redux-actions"
import { newUser as userGenerator } from "../../entities/userEntity"

const _ns = "userForm/"
export const getState = state => state.userForm || {}
const action = (actionName, payload) => createAction(_ns+actionName, payload)

export const getEditingUser = (globalState) => {
	const state = getState(globalState)
	return state.editingUser
}

export const newUser = action("NEW_USER", () => userGenerator())
export const setEditingUserField = action("SET_EDITING_USER_FIELD", (propName, propValue) => ({
	propName, propValue
}))

export const reducer = handleActions({
	[newUser]: (state, action) => {
		return {
			...state,
			editingUser: action.payload
		}
	},
	[setEditingUserField]: (state, action) => {
		return {
			...state,
			editingUser: {
				...(state.editingUser || {}),
				[action.payload.propName]: action.payload.propValue
			}
		}
	}
}, {})
export default reducer