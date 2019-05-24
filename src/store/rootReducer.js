import { combineReducers } from "redux"

import * as userFormDuck from "../features/userForm/userForm.duck"
import * as usersDuck from "../features/users/users.duck"

export default () => {
	return combineReducers({
		...userFormDuck.combinableReducer,
		users: usersDuck.reducer
	})
}

export const oldReducer = (state, action) => {
	if (action.type === "INCREMENT_COUNT"){
		return {
			...state,
			count: state.count + 1
		}
	}
	if (action.type === "SAVE_USER_FORM") {
		const newUser = {
			...state.userForm,
			id: action.payload
		}

		return {
			...state,
			users: [
				...state.users,
				newUser
			]
		}
	}
	if (action.type === userFormDuck.setUserFormProp.toString()) {
		const { prop, newValue } = action.payload
		return {
			...state,
			userForm: {
				...state.userForm,
				[prop]: newValue
			}
		}
	}
	if (action.type === "REMOVE_USER_BY_ID") {
		const newUserList = state.users.filter((user) => {
			return user.id !== action.payload
		})

		return {
			...state,
			users: newUserList
		}
	}
	return state
}