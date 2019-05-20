import { createAction as createReduxAction, handleActions } from "redux-actions"
import { call, put, takeLeading } from "redux-saga/effects"
import { delay } from "../utils/delay"

const _ns = "@user/"
export const getState = globalState => globalState.user || {}
const createAction = (action, payload) => createReduxAction(_ns+action, payload)

export const isAuthenticated = state => !!getState(state).authenticated
export const setAuthenticated = createAction("SET_AUTHENTICATED", (flag = true) => !!flag)
export const flipAuthenticated = createAction("FLIP_AUTHENTICATED")
export const sagaAuthenticated = createAction("SAGA_AUTHENTICATED")

function* fetchAuthenticated() {
	try {
		const data = yield call(delay, 3000, true)
		yield put(setAuthenticated(data))
	} catch (error) {
		yield put(setAuthenticated(false))
	}
}

export const saga = function* () {
	yield takeLeading(sagaAuthenticated, fetchAuthenticated)
}

export const reducer = handleActions({
	[setAuthenticated]: (state, { payload }) => ({
		...state,
		authenticated: payload
	}),
	[flipAuthenticated]: (state) => ({
		...state,
		authenticated: !state.authenticated
	})
}, {})
export default reducer