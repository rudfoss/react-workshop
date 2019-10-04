import { createAction, handleActions } from "redux-actions"

export const setName = createAction("SET_NAME", (newName) => newName+"")
export const getName = (state) => state.createUser.name || ""

export const reducer = handleActions({
	[setName]: (state, { payload }) => ({
		...state,
		createUser: {
			...state.createUser,
			name: payload
		}
	})
}, {})

export default reducer