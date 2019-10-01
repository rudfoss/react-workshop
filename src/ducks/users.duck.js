import { createAction, handleActions } from "redux-actions"
import { takeLeading, call, put } from "redux-saga/effects"
import * as api from "../api"

const _ns = "users"
export const getState = state => state[_ns] || {}
const action = (actionName, payload) => createAction(_ns+"/"+actionName, payload)

export const setLoginFailedMessage = action("SET_LOGIN_FAILED")
export const getLoginFailedMessage = (state) => getState(state).loginFailedMessage
export const isLoginFailed = (state) => !!getLoginFailedMessage(state)

const setCreateSuccess = action("SET_CREATE_SUCCESS", (flag = false) => !!flag)
export const resetCreateSuccess = () => setCreateSuccess()
export const isCreateSuccess = (state) => !!getState(state).createSuccess
export const setCreateFailedMessage = action("SET_CREATE_FAILED")
export const getCreateFailedMessage = (state) => getState(state).createFailedMessage
export const isCreateFailed = (state) => !!getCreateFailedMessage(state)

export const getUser = (state) => getState(state).user
export const isAuthenticated = (state) => !!getUser(state)
export const setLoggedInUser = action("SET_LOGGED_IN_USER")

export const loginUser = action("LOGIN_USER")
function* loginUserSaga({ payload }) {
	const { username, password } = payload
	yield put(setLoginFailedMessage())
	try {
		const user = yield call(api.login, username, password)
		yield put(setLoggedInUser(user))
	} catch (error) {
		yield put(setLoginFailedMessage("Invalid user name or password"))
	}
}

export const createUser = action("CREATE_USER")
function* createUserSaga({ payload }) {
	yield put(resetCreateSuccess())
	yield put(setCreateFailedMessage())
	try {
		yield call(api.createUser, payload)
		yield put(setCreateSuccess(true))
	} catch (error) {
		yield put(setCreateFailedMessage("Duplicate user"))
	}
}

export function* saga() {
	yield takeLeading(loginUser, loginUserSaga)
	yield takeLeading(createUser, createUserSaga)
}

export const reducer = handleActions({
	[setLoginFailedMessage]: (state, { payload }) => ({
		...state,
		loginFailedMessage: payload
	}),
	[setCreateFailedMessage]: (state, { payload }) => ({
		...state,
		createFailedMessage: payload
	}),
	[setCreateSuccess]: (state, { payload }) => ({
		...state,
		createSuccess: payload
	}),
	[setLoggedInUser]: (state, { payload }) => ({
		...state,
		user: payload
	})
}, {})
export const duck = {
	ns: _ns, 
	reducer,
	saga
}