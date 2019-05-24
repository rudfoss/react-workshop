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

/**
 * This is our new reducer that routes actions to the appropriate sub-reducer
 * function in order to simplify the logic.
 */
export const reducer = handleActions({
	[setUserFormProp]: (state, action) => { // This function ONLY handles one specific action
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

/**
 * This is the old reducer that naively looks at actions and uses the if/else pattern to change state
 * This is no longer used, but kept for reference.
 */
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