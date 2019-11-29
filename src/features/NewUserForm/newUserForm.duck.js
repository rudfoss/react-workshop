import { createAction, handleActions } from "redux-actions"

const ROLES = [
	{
		value: "admin",
		label: "Administrator"
	},
	{
		value: "user",
		label: "User"
	}
]

export const getState = (state) => state.newUserForm || {}

export const getName = (state) => getState(state).name || ""
export const getDescription = (state) => getState(state).description || ""
export const getRole = (state) => getState(state).role || ROLES[0]
export const getRoles = (state) => getState(state).roles || ROLES

export const setName = createAction("SET_NAME")
/*
	{
		type: "SET_NAME"
		payload: argument[0]
	}
	export const setName = (newName) => ({
		type: "SET_NAME",
		payload: newName
	})
	setName.toString = () => "SET_NAME"
*/

export const setDescription = createAction("SET_DESCRIPTION")
export const setRole = createAction("SET_ROLE")
export const resetNewUserForm = createAction("RESET_NEW_USER_FORM")

export const reducer = handleActions({
	[setName]: (state, action) => {
		return {
			...state,
			name: action.payload
		}
	},
	"SET_DESCRIPTION": (state, action) => {

	},
	"SET_ROLE": (state, action) => {

	}
}, {
	roles: ROLES
})

/*
export const reducer = (state, action) => {
	if (action.type === setName.toString()) {
		return {
			...state,
			name: action.payload
		}
	}
	if (action.type === setDescription.toString()) {
		return {
			...state,
			description: action.payload
		}
	}
	if (action.type === setRole.toString()) {
		return {
			...state,
			role: action.payload
		}
	}

	if (action.type === resetNewUserForm.toString()) {
		return {
			...state,
			name: "",
			description: "",
			role: undefined
		}
	}

	return state
}
*/
export default reducer