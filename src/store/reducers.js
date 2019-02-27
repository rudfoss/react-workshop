import {combineReducers} from "redux"
import {connectRouter} from "connected-react-router"
import reducers from "../ducks"

export default (history) => combineReducers({
	router: connectRouter(history),
	...reducers
})