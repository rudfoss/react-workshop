import { createStore as reduxCreateStore, compose as reduxCompose } from "redux"
import reducer from "./createUser.duck"

export const createStore = (initialState = {}) => {
	const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose
	return reduxCreateStore(reducer, initialState, compose())
}