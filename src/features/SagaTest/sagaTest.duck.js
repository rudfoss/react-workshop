import { createAction, handleActions } from "redux-actions"
import { takeLatest, call, put } from "redux-saga/effects"
import { delay } from "../../utils/delay"

const _ns = "sagaTest"
export const getState = state => state[_ns] || {}
const action = (actionName, payload) => createAction(_ns+"/"+actionName, payload)

export const setIsLoading = action("SET_IS_LOADING", (flag = true) => (!!flag))
export const isLoading = (state) => !!getState(state).isLoading
export const setResult = action("SET_RESULT")
export const getResult = (state) => getState(state).result

export const fetchResult = action("FETCH_RESULT")
function* fetchResultSaga(action) {
	console.log("fetchResult: Debouncing", action.payload)
	yield put(setIsLoading())
	yield call(delay, action.payload || 1000)
	console.log("fetchResult: Talking to server")
	yield put(setResult("DATA FROM A SERVER"))
	yield put(setIsLoading(false))
	console.log("fetchResult: Done")
}
export function* saga() {
	yield takeLatest(fetchResult, fetchResultSaga)
}

export const reducer = handleActions({
	[setIsLoading]: (state, { payload }) => ({
		...state,
		isLoading: payload
	}),
	[setResult]: (state, { payload }) => ({
		...state,
		result: payload
	})
}, {})

export const duck = {
	ns: _ns,
	reducer,
	saga
}