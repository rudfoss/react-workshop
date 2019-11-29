import { createAction, handleActions } from "redux-actions"
import { takeLatest, call, select, put } from "redux-saga/effects"

import { callSearchAPI } from "../../api/searchApi"
import { delay } from "../../utils/delay"

export const ns = "search"
export const getState = state => state[ns] || {}

export const getText = (state) => getState(state).text || ""
export const setText = createAction(ns+"/SET_TEXT")

export const getResults = (state) => getState(state).results || {}
export const setResults = createAction(ns+"/SET_RESULTS")

export const searchForText = createAction(ns+"/SEARCH_FOR_TEXT")
function* searchForTextSaga() {
	yield call(delay, 500)
	const searchText = yield select(getText) // getText(state)
	try {
		const results = yield call(callSearchAPI, searchText)
		yield put(setResults(results))
	// eslint-disable-next-line no-empty
	} catch (error) {
		console.error(error)
	}
}

export function* saga() {
	yield takeLatest(searchForText, searchForTextSaga)
}

export const reducer = handleActions({
	[setText]: (state, action) => {
		return {
			...state,
			text: action.payload
		}
	},
	[setResults]: (state, action) => {
		return {
			...state,
			results: action.payload
		}
	}
}, {})