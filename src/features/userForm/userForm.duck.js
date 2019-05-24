import { createAction, handleActions } from "redux-actions"

const SUBSTATE_NS = "userForm"
const _ns = SUBSTATE_NS+"/"
export const getState = (state) => state[SUBSTATE_NS] || {}
const action = (actionName, payload) => createAction(_ns+actionName, payload)

export const getName = (state) => getState(state).name || ""
export const getProp = (state, prop) => getState(state)[prop]
export const setUserFormProp = action("SET_USER_FORM_PROP", (prop, newValue) => {
	return {
		prop, newValue
	}
})

export const reducer = handleActions({
	[setUserFormProp]: (state, action) => {
		// (state, { payload }) => {
		const { prop, newValue } = action.payload
		return {
			...state,
			[prop]: newValue
		}
	}
}, {})

export const combinableReducer = {
	[SUBSTATE_NS]: reducer
}

export const oldReducer = (state = {}, action) => {
	if (action.type === setUserFormProp.toString()) {
		const { prop, newValue } = action.payload
		return {
			...state,
			[prop]: newValue
		}
	}

	return state
}