import { createAction, handleActions } from "redux-actions"
import * as usersApi from "../../api/usersApi"
import { put, call, select, takeLeading } from "redux-saga/effects"

const _ns = "users/"
export const getState = state => state.users || {}
const action = (actionName, payload) => createAction(_ns+actionName, payload)

export const getUserById = (state, id) => (getState(state).byId || {})[id]
export const getUserIds = (state) => getState(state).order || []
export const getUsers = (state) => {
	return getUserIds(state).map((userId) => getUserById(state, userId))
}

export const isWorking = (state) => !!getState(state).isWorking
export const setWorking = action("SET_IS_WORKING", (flag = true) => !!flag)

export const setUser = action("SET_USER")
export const setArrayOfUsers = action("SET_ARRAY_OF_USERS")
export const fetchUsers = async (dispatch) => {
	dispatch(setWorking())
	try {
		const users = await usersApi.fetchUsers()
		dispatch(setArrayOfUsers(users))
	} finally {
		dispatch(setWorking(false))
	}
}
export const storeUsers = async (dispatch, getState) => {
	dispatch(setWorking())
	const users = getUsers(getState())
	try {
		await usersApi.storeUsers(users)
	} finally {
		dispatch(setWorking(false))
	}
}

export const fetchUsersSagaAction = action("FETCH_USERS_BY_SAGA")
export const storeUsersSagaAction = action("STORE_USERS_BY_SAGA")
function* fetchUsersSaga() {
	yield put(setWorking())
	try {
		const users = yield call(usersApi.fetchUsers)
		yield put(setArrayOfUsers(users))
	} finally {
		yield put(setWorking(false))
	}
}
function* storeUsersSaga() {
	yield put(setWorking())
	try {
		const users = yield select(getUsers)
		yield call(usersApi.storeUsers, users)
	} finally {
		yield put(setWorking(false))
	}
}

export function* saga() {
	yield takeLeading(fetchUsersSagaAction, fetchUsersSaga)
	yield takeLeading(storeUsersSagaAction, storeUsersSaga)
}

export const reducer = handleActions({
	[setUser]: (state, { payload }) => {
		let newOrder = state.order || []
		if (newOrder.indexOf(payload.id) === -1) {
			newOrder = newOrder.slice()
			newOrder.push(payload.id)
		}

		return {
			...state,
			order: newOrder,
			byId: {
				...(state.byId || {}),
				[payload.id]: payload
			}
		}

		/* What is actually happening above
		let newState = {}
		newState.byId = state.byId
		newState.order = state.order
		newState.byId = {}
		newState.byId["a"] = state.byId["a"]
		newState.byId["b"] = state.byId["b"]
		// ...
		newState.byId["b"] = payload
		*/
	},
	[setWorking]: (state, { payload }) => ({
		...state,
		isWorking: payload
	}),
	[setArrayOfUsers]: (state, { payload }) => {
		return {
			...state,
			order: payload.map((user) => user.id),
			byId: payload.reduce((acc, user) => {
				acc[user.id] = user
				return acc
			}, {})
		}
	}
}, {})
export default reducer