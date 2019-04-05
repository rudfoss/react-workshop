import { combineReducers } from "redux"

import * as userForm from "../features/userForm/userForm.duck"
import * as users from "../features/users/users.duck"

export const ducks = {
	userForm,
	users
}
export const rootReducer = combineReducers({
	userForm: userForm.reducer,
	users: userForm.reducer
})

const oldReducer = (state = {}, action) => {
	if (action.type === "INCREMENT_COUNTER") {
		return {
			...state,
			counter: (state.counter || 0) + 1
		}
	}
	if (action.type === "REMOVE_USER_BY_ID") {
		return {
			...state,
			users: (state.users || []).filter((user) => user.id !== action.payload)
		}
	}
	if (action.type === "CREATE_NEW_USER") {
		return {
			...state,
			userForm: {
				...(state.userForm || {}),
				editingUser: action.payload
			}
		}
	}
	if (action.type === "SET_EDITING_USER_PROP") {
		return {
			...state,
			userForm: {
				...state.userForm,
				editingUser: {
					...state.userForm.editingUser,
					[action.payload.propName]: action.payload.propValue
				}
			}
		}
	}
	return state
}