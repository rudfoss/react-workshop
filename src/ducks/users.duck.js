import { createAction, handleActions } from "redux-actions"
import { takeLeading, call, put } from "redux-saga/effects"
import { login } from "../api"

const _ns = "users"
export const getState = state => state[_ns] || {}
const action = (actionName, payload) => createAction(_ns+"/"+actionName, payload)

export const setLoginFailedMessage = action("SET_LOGIN_FAILED")
export const getLoginFailedMessage = (state) => getState(state).loginFailedMessage
export const isLoginFailed = (state) => !!getLoginFailedMessage(state)

export const setLoggedInUser = action("SET_LOGGED_IN_USER")

export const loginUser = action("LOGIN_USER")
function* loginUserSaga({ payload }) {
	const { username, password } = payload
	yield put(setLoginFailedMessage())
	try {
		yield call(login, username, password)
	} catch (error) {
		yield put(setLoginFailedMessage("Invalid user name or password"))
	}
}
export function* saga() {
	yield takeLeading(loginUser, loginUserSaga)
}

export const reducer = handleActions({
	[setLoginFailedMessage]: (state, { payload }) => ({
		...state,
		loginFailedMessage: payload
	})
}, {})
export const duck = {
	ns: _ns, 
	reducer,
	saga
}