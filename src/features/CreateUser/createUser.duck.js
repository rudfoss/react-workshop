import { createAction, handleActions } from "redux-actions"

const _ns = "createUser"
export const getState = (state) => state[_ns] || {}
const action = (actionName, payload) => createAction(_ns+"/"+actionName, payload)

export const getName = (state) => getState(state).name || ""
export const getEmail = (state) => getState(state).email || ""
export const getPassword = (state) => getState(state).password || ""
export const getRetypePassword = (state) => getState(state).retypePassword || ""
export const getNickname = (state) => getState(state).nickname || ""
export const getAge = (state) => getState(state).age || 0
export const getLevel = (state) => getState(state).level || {
	label: "Peon",
	value: "peon"
}

export const isValid = (state) => {
	if (!getName(state)) return false
	if (!getEmail(state)) return false
	if (!getPassword(state)) return false
	if (!getRetypePassword(state)) return false
	if (getPassword(state) !== getRetypePassword(state)) return false
	return true
}

export const setProp = action("SET_PROP", (prop, newPropValue) => ({
	prop, newPropValue
}))

export const reducer = handleActions({
	[setProp]: (state, { payload }) => ({
		...state,
		[payload.prop]: payload.newPropValue
	})
}, {})

export const duck = {
	ns: _ns,
	reducer
}