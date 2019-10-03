import { createAction, handleActions } from "redux-actions"
import { takeLeading, call, put, select } from "redux-saga/effects"

import * as api from "../../api"

const _ns = "activeRoom"
export const getState = state => state[_ns] || {}
const action = (actionName, payload) => createAction(_ns+"/"+actionName, payload)

export const isRoomFailed = (state) => !!getState(state).failedMessage
export const setRoomFailedMessage = action("SET_ROOM_FAILED_MESSAGE")

export const getRoom = (state) => getState(state).room
export const setRoom = action("SET_ROOM")
export const hasRoom = (state) => !!getRoom(state)

export const getName = (state) => getState(state).name || ""
export const getMessages = (state) => getState(state).messages || []
export const getMessageCount = (state) => getMessages(state).length
export const setMessages = action("SET_MESSAGES")
export const getParticipants = (state) => (getRoom(state) || {}).participants || []
export const getParticipantCount = (state) => getParticipants(state).length

export const fetchMessagesByRoom = action("FETCH_MESSAGES_IN_ROOM")
function* fetchMessagesByRoomSaga() {
	const name = yield select(getName)
	if (!name) return
	const messages = yield call(api.getMessagesByRoom, name)
	yield put(setMessages(messages))
}

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
	yield takeLeading(fetchMessagesByRoom, fetchMessagesByRoomSaga)
	yield takeLeading(fetchRoomByName, fetchRoomByNameSaga)
}

export const reducer = handleActions({
	[setRoom]: (state, { payload }) => ({
		...state,
		room: payload
	}),
	[setMessages]: (state, { payload }) => ({
		...state,
		room: {
			...state.room,
			messages: payload
		}
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