import * as userFormDuck from "../features/userForm/userForm.duck"
import * as usersDuck from "../features/users/users.duck"

export const setUser = (dispatch, getState) => {
	const newUser = userFormDuck.getUser(getState())
	dispatch(
		usersDuck.setUser(newUser)
	)
}