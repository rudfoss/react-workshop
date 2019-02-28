import {createStore as createReduxStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import rootReducer from "../ducks"

import createBrowserHistory from "history/createBrowserHistory"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const createStore = () => (
	createReduxStore(rootReducer, {}, composeEnhancer(applyMiddleware(thunk)))
)