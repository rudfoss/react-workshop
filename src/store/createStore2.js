import { createStore as reduxCreateStore, compose as reduxCompose, combineReducers } from "redux"
import createUserDuck from "features/CreateUser/createUser.duck"

const combinedReducer = combineReducers({
	...createUserDuck
})

export const createStore = (initialState = {}) => {
	const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose
	return reduxCreateStore(combinedReducer, initialState, compose())
}