import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import * as users from "../features/users/users.duck"
import * as userForm from "../features/userForm/userForm.duck"

export const ducks = {
	users,
	userForm
}

const baseReducerState =
	Object.keys(ducks).reduce((acc, item) => {
		acc[item] = (ducks[item]).reducer
		return acc
	}, {})

export const rootReducer = (history) => combineReducers({
	...baseReducerState,
	router: connectRouter(history)
})
