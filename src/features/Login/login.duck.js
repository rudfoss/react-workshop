import { createAction, handleActions } from "redux-actions"
import { takeLeading, put, select } from "redux-saga/effects"

import * as usersDuck from "ducks/users.duck"

const _ns = "login"
export const getState = state => state[_ns] || {}
const action = (actionName, payload) => createAction(_ns+"/"+actionName, payload)

export const getUsername = (state) => getState(state).username || ""
export const getPassword = (state) => getState(state).password || ""
export const setUsername = action("SET_USERNAME")
export const setPassword = action("SET_PASSWORD")

export const loginUser = action("LOGIN_USER")
function* loginUserSaga() {
	const username = yield select(getUsername)
	const password = yield select(getPassword)
	yield put(usersDuck.loginUser({ username, password }))
}

export function* saga() {
	yield takeLeading(loginUser, loginUserSaga)
}

export const reducer = handleActions({
	[setUsername]: (state, { payload }) => ({
		...state,
		username: payload
	}),
	[setPassword]: (state, { payload }) => ({
		...state,
		password: payload
	})
}, {})

export const duck = {
	ns: _ns,
	saga,
	reducer
}