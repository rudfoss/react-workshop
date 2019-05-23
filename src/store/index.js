import { applyMiddleware, compose as reduxCompose, createStore } from "redux"
import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga"

import rootReducer from "./rootReducer"

export const newStore = (initialState = {}) => {
	const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose
	const sagaMiddleware = createSagaMiddleware()
	
	const store = createStore(rootReducer, initialState, compose(
		applyMiddleware(thunk, sagaMiddleware)
	))

	return store
}
export default newStore