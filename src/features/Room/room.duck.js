import { createAction, handleActions } from "redux-actions"
import { takeLeading, call, put, select } from "redux-saga/effects"

import * as userDuck from "../../ducks/users.duck"
import * as api from "../../api"

const _ns = "room"
export const getState = state => state[_ns] || {}
const action = (actionName, payload) => createAction(_ns+"/"+actionName, payload)

export const isRoomFailed = (state) => !!getState(state).failedMessage
export const setRoomFailedMessage = action("SET_ROOM_FAILED_MESSAGE")

export const getRoom = (state) => getState(state).room
export const setRoom = action("SET_ROOM")
export const hasRoom = (state) => !!getRoom(state)

export const getName = (state) => getRoom(state).name || ""
export const getDescription = (state) => getRoom(state).description || ""
export const getMessages = (state) => getRoom(state).messages || []
export const getMessageCount = (state) => getMessages(state).length
export const setMessages = action("SET_MESSAGES")
export const isHidden = (state) => !!getRoom(state).hidden

export const getCurrentMessage = (state) => getState(state).currentMessage || ""
export const setCurrentMessage = action("SET_CURRENT_MESSAGE")

export const fetchMessages = action("FETCH_MESSAGES")
function* fetchMessagesSaga() {
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

export const sendMessage = action("SEND_CURRENT_MESSAGE")
function* sendMessageSaga() {
	const roomName = yield select(getName)
	const currentMessage = yield select(getCurrentMessage)
	const author = yield select(userDuck.getUserName)
	const message = {
		author,
		message: currentMessage
	}
	yield put(setCurrentMessage(""))
	yield call(api.sendMessageToRoom, roomName, message)
	yield put(fetchMessages())
}

export function* saga() {
	yield takeLeading(fetchMessages, fetchMessagesSaga)
	yield takeLeading(fetchRoomByName, fetchRoomByNameSaga)
	yield takeLeading(sendMessage, sendMessageSaga)
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
	[setCurrentMessage]: (state, { payload }) => ({
		...state,
		currentMessage: payload
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