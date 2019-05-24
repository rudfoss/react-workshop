import { createAction, handleActions } from "redux-actions"

const _ns = "userForm/"
const action = (actionName, payload) => createAction(_ns+actionName, payload)

// TODO: Fix
export const saveUserForm = action("SAVE_USER_FORM")

export const setUserFormProp = action("SET_USER_FORM_PROP", (prop, newValue) => {
	return {
		prop, newValue
	}
})

export const reducer = (state = {}, action) => {
	if (action.type === setUserFormProp.toString()) {
		const { prop, newValue } = action.payload
		return {
			...state,
			[prop]: newValue
		}
	}

	return state
}