import { combineReducers } from "redux"

import * as user from "./user.duck"

export const ducks = {
	user
}

export const rootReducer = () => {
	const reducers = Object.keys(ducks).reduce((acc, key) => {
		acc[key] = ducks[key].reducer
		return acc
	}, {})
	return combineReducers(reducers)
}
export default rootReducer