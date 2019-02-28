import * as usersDuck from "./users.duck"
import * as newUserDuck from "./newUser.duck"

export const addNewUser = () => (dispatch, getState) => {
	const userObj = newUserDuck.getNewUser(getState())
	dispatch(usersDuck.addNewUser(userObj))
}