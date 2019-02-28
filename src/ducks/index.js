import * as newUser from "./newUser.duck"
import {combineReducers} from "redux"

const rootReducer = {
	newUser: newUser.reducer
}

export default combineReducers(rootReducer)