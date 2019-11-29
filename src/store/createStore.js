import { applyMiddleware, compose as reduxCompose, createStore as reduxCreateStore, combineReducers } from "redux"
import createSagaMiddleware from "redux-saga"
import { ducks, duckMap } from "../ducks"

export const createStore = (initialState = {}) => {
	const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose
	const sagaMiddleware = createSagaMiddleware()

	const sagas = []
	const reducerMap = {}
	for (const duck of ducks) {
		reducerMap[duck.ns] = duck.reducer
		if (duck.saga) {
			console.log(`registering saga for ${duck.ns}`)
			sagas.push(duck.saga)
		}
	}

	const store = reduxCreateStore(combineReducers(duckMap), initialState, compose(
		applyMiddleware(sagaMiddleware)
	))

	sagas.forEach((saga) => {
		sagaMiddleware.run(saga)
	})

	return store
}

export default createStore