import {createStore as createReduxStore, applyMiddleware, compose, combineReducers} from "redux"
import thunk from "redux-thunk"
import rootReducers from "../ducks"
import {connectRouter, routerMiddleware} from "connected-react-router"

import createBrowserHistory from "history/createBrowserHistory"

export const history = createBrowserHistory()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const createStore = () => (
	createReduxStore(
		combineReducers({
			...rootReducers,
			router: connectRouter(history)
		}),
		{},
		composeEnhancer(
			applyMiddleware(
				thunk,
				routerMiddleware(history)
			)
		)
	)
)