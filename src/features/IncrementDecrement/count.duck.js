import { createAction, handleActions } from "redux-actions"
import { takeLatest, call, select, put } from "redux-saga/effects"

import { delay } from "../../utils/delay"

export const ns = "count"
export const getState = state => state[ns] || {}

export const getCount = (state) => getState(state).count || 0

export const setCount = createAction(ns+"/SET")
export const increment = createAction(ns+"/INCREMENT")
export const decrement = createAction(ns+"/DECREMENT")

export const setCountInTitle = createAction(ns+"/SET_COUNT_IN_TITLE")

function* setCountInTitleSaga() {
	yield call(delay, 5000)
	const count = yield select(getCount) 
	document.title = "Current count is "+count
	yield put(setCount(0))
}
export function* saga() {
	yield takeLatest(setCountInTitle, setCountInTitleSaga)
}

export const reducer = handleActions({
	[setCount]: (state, action) => {
		return {
			...state,
			count: action.payload
		}
	},
	[increment]: (state) => {
		return {
			...state,
			count: (state.count || 0) + 1
		}
	},
	[decrement]: (state) => {
		return {
			...state,
			count: (state.count || 0) - 1
		}
	}
}, {})

export default reducer