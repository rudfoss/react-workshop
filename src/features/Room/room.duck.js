import { createAction, handleActions } from "redux-actions"
import { takeLeading, call, put } from "redux-saga/effects"

import * as api from "../../api"

const _ns = "room"
export const getState = state => state[_ns] || {}
const action = (actionName, payload) => createAction(_ns+"/"+actionName, payload)

export const isRoomFailed = (state) => !!getState(state).failedMessage
export const setRoomFailedMessage = action("SET_ROOM_FAILED_MESSAGE")

export const getName = (state) => getState(state).name || ""
export const hasRoom = (state) => !!getState(state).name
export const setRoom = action("SET_ROOM")

export const fetchRoomByName = action("FETCH_ROOM_BY_NAME")
function* fetchRoomByNameSaga({ payload }) {
	yield put(setRoomFailedMessage())
	try {
		const room = yield call(api.getRoom, payload)
		yield put(setRoom(room))
	} catch (error) {
		yield put(setRoomFailedMessage("Room failed"))
	}
}

export function* saga() {
	yield takeLeading(fetchRoomByName, fetchRoomByNameSaga)
}

export const reducer = handleActions({
	[setRoom]: (state, { payload }) => ({
		...state,
		room: payload
	}),
	[setRoomFailedMessage]: (state, { payload }) => ({
		...state,
		failedMessage: payload
	})
}, {})

export const duck = {
	ns: _ns,
	reducer,
	saga
}