import { combineReducers } from "redux"

import * as users from "../features/users/users.duck"

export const ducks = {
	users
}

const baseReducerState =
	Object.keys(ducks).reduce((acc, item) => {
		acc[item] = (ducks[item]).reducer
		return acc
	}, {})

export const rootReducer = () => combineReducers({
	...baseReducerState
})
