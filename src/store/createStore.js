import { applyMiddleware, compose as reduxCompose, createStore as reduxCreateStore } from "redux"
import createSagaMiddleware from "redux-saga"

export const createStore = (initialState = {}) => {
	const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose
	const sagaMiddleware = createSagaMiddleware()

	const store = reduxCreateStore({}, initialState, compose(
		applyMiddleware(sagaMiddleware)
	))

	return store
}

export default createStore