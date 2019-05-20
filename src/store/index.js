import { applyMiddleware, compose as reduxCompose, createStore } from "redux"
import thunk from "redux-thunk"
import rootReducer, { ducks } from "../ducks"
import createSagaMiddleware from "redux-saga"

export const newStore = (initialState = {}) => {
	const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose
	const sagaMiddleware = createSagaMiddleware()

	const store = createStore(rootReducer(), initialState, compose(
		applyMiddleware(thunk, sagaMiddleware))
	)

	Object.values(ducks).forEach(duck => {
		if (duck.saga) {
			sagaMiddleware.run(duck.saga)
		}
	})

	return store
}

export default newStore