import * as userForm from "../features/userForm/userForm.duck"
import * as users from "../features/users/users.duck"

export const setEditUserById = (id) => (dispatch, getState) => {
	const state = getState()
	dispatch(
		userForm.setEditingUser(users.getUserById(state, id))
	)
}

export const setUser = () => (dispatch, getState) => {
	const state = getState()
	dispatch(users.setUser(userForm.getEditingUser(state)))
}