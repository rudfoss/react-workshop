import { createStore as reduxCreateStore, compose as reduxCompose, combineReducers } from "redux"
import createUserDuck from "features/CreateUser/createUser.duck"
import { duck as loginDuck } from "features/Login"

const combinedReducer = combineReducers({
	...createUserDuck,
	[loginDuck.ns]: loginDuck.reducer
})

export const createStore = (initialState = {}) => {
	const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose
	return reduxCreateStore(combinedReducer, initialState, compose())
}