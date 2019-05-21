import { combineReducers } from "redux"

import * as users from "../features/users/users.duck"
import * as userForm from "../features/userForm/userForm.duck"

export const ducks = {
	users,
	userForm
}

export const rootReducer = () => {
	const reducers = Object.keys(ducks).reduce((acc, key) => {
		acc[key] = ducks[key].reducer
		return acc
	}, {})
	return combineReducers(reducers)
}
export default rootReducer