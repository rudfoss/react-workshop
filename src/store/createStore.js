import {createStore as createReduxStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import reducer from "../ducks/newUser.duck"

import createBrowserHistory from "history/createBrowserHistory"

export const createStore = () => (
	createReduxStore(reducer, {})
)