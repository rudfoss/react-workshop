import { applyMiddleware, compose as reduxCompose, createStore } from "redux"
import thunk from "redux-thunk"
import rootReducer from "../ducks"

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose

export const newStore = (initialState = {}) =>
	createStore(rootReducer(), initialState, compose(
		applyMiddleware(thunk))
	)

export default newStore