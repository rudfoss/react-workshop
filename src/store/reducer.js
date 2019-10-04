import { handleActions } from "redux-actions"
import * as actions from "./actions"

export const reducer = handleActions({
	[actions.changeProp]: (state, { payload }) => ({
		...state,
		[payload.prop]: payload.newValue
	}),
	"CHANGE_NAME": (state, action) => {
		return {
			...state,
			name: action.payload
		}
	}
}, {})

export const reducer = (state, action) => {
	if (action.type === "CHANGE_PROP"){
		const newState = Object.assign({}, state)
		newState[action.payload.prop] = action.payload.newValue
		return newState

		// return {
		// 	...state,
		// 	[action.payload.prop]: action.payload.newValue
		// }
	}
	
	return state
}