import { applyMiddleware, compose as reduxCompose, createStore } from "redux"
import thunk from "redux-thunk"
import { rootReducer } from "./rootReducer"

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose

export const configureStore = (initialState = {}, additionalMiddleware = []) =>
	createStore(rootReducer(), initialState, compose(
		applyMiddleware(thunk, ...additionalMiddleware))
	)
