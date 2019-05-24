import { createAction, handleActions } from "redux-actions"
import { uniqueId } from "../../utils/uniqueId"


// First set up our helper functions and constants
const SUBSTATE_NS = "userForm" // This is the only location where the name of the store and namespace of actions is stored
export const getState = (state) => state[SUBSTATE_NS] || {} // General state getter that converst global to local state
const action = (actionName, payload) => createAction(SUBSTATE_NS+"/"+actionName, payload) // Action creator that creates namespaced actions


// SELECTORS
export const getName = (state) => getState(state).name || ""
export const getProp = (state, prop) => getState(state)[prop]
export const getUser = (state) => {
	return {
		id: getProp(state, "id") || uniqueId(),
		name: getProp(state, "name"),
		email: getProp(state, "email"),
		type: getProp(state, "type"),
		password: getProp(state, "password"),
		disabled: getProp(state, "disabled"),
		comments: getProp(state, "comments")
	}
}


// ACTION CREATORS
export const setUserFormProp = action("SET_USER_FORM_PROP", (prop, newValue) => {
	return {
		prop, newValue
	}
})


// REDUCER(s)
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

export const userFormReducer = {
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