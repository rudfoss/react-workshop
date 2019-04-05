import { applyMiddleware, compose as reduxCompose, createStore } from "redux"
import thunk from "redux-thunk"
import { rootReducer } from "./rootReducer"
import { createBrowserHistory } from "history"
import { routerMiddleware } from "connected-react-router"

const compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || reduxCompose

export const history = createBrowserHistory()
export const configureStore = (initialState = {}) =>
	createStore(rootReducer(history), initialState, compose(
		applyMiddleware(routerMiddleware(history), thunk)
	)
	)
