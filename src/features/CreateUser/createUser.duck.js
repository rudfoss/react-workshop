import { createAction, handleActions } from "redux-actions"
import { takeLeading, select, put } from "redux-saga/effects"
import * as usersDucks from "../../ducks/users.duck"


const _ns = "createUser"
export const getState = state => state[_ns] || {}
const action = (actionName, payload) => createAction(_ns+"/"+actionName, payload)

export const getStringProp = (state, prop) => getState(state)[prop] || ""
export const getObjectProp = (state, prop) => getState(state)[prop]
export const getNumProp = (state, prop) => parseFloat(getState(state)[prop] || 0)
export const setProp = action("SET_PROP", (name, value) => ({ name, value }))

export const clearUser = action("CLEAR_USER")

export const getNewUser = (state) => (({
	name, email, password, nickname, age = 0, level = { value: "peon", name: "Peon" }
}) => ({ name, email, password, nickname, age, level }))(getState(state))

export const isValid = (state) => {
	const { name, email, password, repeatPassword } = getState(state)

	if (!name || !email || !password || !repeatPassword) return false
	if (password !== repeatPassword) return false
	return true
}

export const createUser = action("CREATE_USER")
function* createUserSaga() {
	const newUser = yield select(getNewUser)
	yield put(usersDucks.createUser(newUser))
}

function* saga() {
	yield takeLeading(createUser, createUserSaga)
}

export const reducer = handleActions({
	[setProp]: (state, { payload }) => ({
		...state,
		[payload.name]: payload.value
	}),
	[clearUser]: (state) => ({
		...state,
		name: "",
		email: "",
		password: "",
		repeatPassword: "",
		nickname: "",
		age: 0,
		level: {
			label: "Peon",
			value: "peon"
		}
	})
}, {})

export const duck = {
	ns: _ns,
	reducer,
	saga
}