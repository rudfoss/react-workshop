import { createAction, handleActions } from "redux-actions"
import { takeLeading, call, put } from "redux-saga/effects"
import * as api from "../api"

const _ns = "rooms"
export const getState = state => state[_ns] || {}
const action = (actionName, payload) => createAction(_ns+"/"+actionName, payload)

export const getRoom = (state, name) => (getState(state).byName || {})[name]
export const getRooms = (state) => (getState(state).order || []).map((name) => getRoom(state, name))
export const setRooms = action("SET_ROOMS")

export const fetchRooms = action("FETCH_ROOMS")
function* fetchRoomsSaga() {
	const rooms = yield call(api.getRooms)
	yield put(setRooms(rooms))
}

export function* saga() {
	yield takeLeading(fetchRooms, fetchRoomsSaga)
}

export const reducer = handleActions({
	[setRooms]: (state, { payload = [] }) => ({
		...state,
		order: payload.map((room) => room.name),
		byName: payload.reduce((acc, room) => {
			acc[room.name] = room
			return acc
		}, {})
	})
}, {})

export const duck = {
	ns: _ns,
	reducer,
	saga
}