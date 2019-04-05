import * as userForm from "../features/userForm/userForm.duck"
import * as users from "../features/users/users.duck"

export const createUser = () => (dispatch, getState) => {
	const newUser = userForm.getEditingUser(getState())
	dispatch(users.setUser(newUser))
}